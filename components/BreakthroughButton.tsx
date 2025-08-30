
import React from 'react';

interface BreakthroughButtonProps {
  onClick: () => void;
  canBreakthrough: boolean;
  isMaxRealm: boolean;
}

const BreakthroughButton: React.FC<BreakthroughButtonProps> = ({ onClick, canBreakthrough, isMaxRealm }) => {
  if (isMaxRealm) {
    return (
      <div className="text-center py-4 text-cyan-300 text-xl font-bold">
        Đã đạt đến cảnh giới tối cao!
      </div>
    );
  }
  
  const buttonClasses = canBreakthrough
    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/50 animate-pulse'
    : 'bg-gray-700 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={!canBreakthrough}
      className={`w-full max-w-xs text-2xl font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${buttonClasses}`}
    >
      Đột Phá
    </button>
  );
};

export default BreakthroughButton;
