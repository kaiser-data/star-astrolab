import React, { useMemo, useState } from 'react';
import { useGraph } from './GraphProvider';
import { QUERIES } from './queries';

function downloadBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function rowsToCsv(rows) {
  if (!rows || rows.length === 0) return '';
  const headers = Object.keys(rows[0]);
  const escape = (v) => {
    if (v == null) return '';
    if (Array.isArray(v)) v = v.join('; ');
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [headers.join(',')];
  for (const row of rows) lines.push(headers.map((h) => escape(row[h])).join(','));
  return lines.join('\n');
}

function ResultTable({ rows, onSelect }) {
  if (!rows || rows.length === 0) {
    return <div className="text-gray-500 text-sm">No results.</div>;
  }
  const headers = Object.keys(rows[0]);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            {headers.map((h) => (
              <th key={h} className="text-left py-2 pr-4 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const fullName = typeof row.full_name === 'string' ? row.full_name : null;
            return (
              <tr
                key={i}
                className={`border-b border-gray-800 hover:bg-gray-800/50 ${fullName && onSelect ? 'cursor-pointer' : ''}`}
                onClick={() => fullName && onSelect && onSelect(fullName)}
              >
                {headers.map((h) => {
                  const v = row[h];
                  let display = v;
                  if (Array.isArray(v)) display = v.join(', ');
                  else if (typeof v === 'number') display = v.toLocaleString();
                  return (
                    <td key={h} className="py-2 pr-4 text-gray-200">
                      {h === 'full_name' && typeof v === 'string' ? (
                        <span className="text-blue-400 hover:text-blue-300">{v}</span>
                      ) : display}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function InsightFeed({ onSelect }) {
  const { status, nodes = [] } = useGraph();
  const [activeKey, setActiveKey] = useState('whereDevsWork');

  const result = useMemo(() => {
    if (status !== 'ready') return null;
    const q = QUERIES[activeKey];
    if (!q) return null;
    return q.run(nodes);
  }, [status, nodes, activeKey]);

  if (status !== 'ready') return <div className="text-gray-400 p-4">Loading the map…</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-1">
        <h3 className="hidden lg:block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wide">Quick answers</h3>
        {/* phones: one swipeable row of chips instead of a full-screen list */}
        <div className="-mx-4 px-4 lg:mx-0 lg:px-0 flex lg:flex-col gap-1.5 lg:gap-1 overflow-x-auto lg:overflow-visible no-scrollbar">
          {Object.entries(QUERIES).map(([key, q]) => (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`shrink-0 whitespace-nowrap lg:whitespace-normal text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                activeKey === key ? 'bg-white text-black' : 'bg-gray-900 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600'
              }`}
            >
              {q.title}
            </button>
          ))}
        </div>
      </div>
      <div className="min-w-0 lg:col-span-3 bg-gray-800 rounded-lg p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">{QUERIES[activeKey].title}</h2>
            <p className="text-sm text-gray-400 mt-1">{QUERIES[activeKey].description}</p>
          </div>
          {result && result.length > 0 && (
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => downloadBlob(JSON.stringify(result, null, 2), `${activeKey}.json`, 'application/json')}
                className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-xs rounded font-medium"
              >Export JSON</button>
              <button
                onClick={() => downloadBlob(rowsToCsv(result), `${activeKey}.csv`, 'text/csv')}
                className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-xs rounded font-medium"
              >Export CSV</button>
            </div>
          )}
        </div>
        <ResultTable rows={result} onSelect={onSelect} />
        <div className="text-xs text-gray-500 mt-3">Click any project name to see its details.</div>
      </div>
    </div>
  );
}
