
import React from 'react';
import type { Realm } from '../types';

interface RealmDisplayProps {
  currentRealm: Realm;
  nextRealm: Realm | undefined;
  cultivationPoints: number;
}

const RealmDisplay: React.FC<RealmDisplayProps> = ({ currentRealm, nextRealm, cultivationPoints }) => {
  const progress = nextRealm ? Math.min((cultivationPoints / nextRealm.threshold) * 100, 100) : 100;

  return (
    <div className="w-full text-center space-y-4">
      <div>
        <h2 className="text-xl text-gray-400">Cảnh giới hiện tại</h2>
        <p className={`text-4xl font-bold ${currentRealm.color} drop-shadow-[0_0_10px_var(--tw-shadow-color)] ${currentRealm.shadowColor}`}>
          {currentRealm.name}
        </p>
      </div>
      
      <div className="font-orbitron">
        <h3 className="text-2xl text-cyan-300 tracking-widest">
          {Math.floor(cultivationPoints).toLocaleString('en-US')}
        </h3>
        <p className="text-gray-500 text-sm">Tu vi</p>
      </div>

      <div className="w-full pt-2">
        <div className="w-full bg-gray-700/50 rounded-full h-4 border border-gray-600">
          <div
            className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
          <span>0</span>
          <span>{nextRealm ? nextRealm.threshold.toLocaleString('en-US') : 'MAX'}</span>
        </div>
      </div>
    </div>
  );
};

export default RealmDisplay;
