
import React from 'react';

interface LogPanelProps {
  log: string[];
}

const LogPanel: React.FC<LogPanelProps> = ({ log }) => {
  return (
    <div className="w-full max-w-2xl mt-8 bg-black/30 rounded-lg p-4 h-48 overflow-y-auto border border-purple-500/30">
      <h3 className="text-lg font-bold text-gray-300 mb-2 border-b border-gray-600 pb-1">Tu Luyện Nhật Ký</h3>
      <ul className="space-y-1 text-sm text-gray-400">
        {log.map((message, index) => (
          <li key={index} className={`opacity-${100 - index * 10} transition-opacity`}>
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogPanel;
