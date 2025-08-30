
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { REALMS } from './constants';
import type { Realm } from './types';
import Header from './components/Header';
import RealmDisplay from './components/RealmDisplay';
import BreakthroughButton from './components/BreakthroughButton';
import LogPanel from './components/LogPanel';
import BreakthroughEffect from './components/BreakthroughEffect';
import CultivationRate from './components/CultivationRate';

const App: React.FC = () => {
  const [cultivationPoints, setCultivationPoints] = useState<number>(0);
  const [currentRealmIndex, setCurrentRealmIndex] = useState<number>(0);
  const [pointsPerSecond, setPointsPerSecond] = useState<number>(REALMS[0].basePointsPerSecond);
  const [log, setLog] = useState<string[]>(['Chào mừng đạo hữu đến với con đường tu tiên.']);
  const [showBreakthroughEffect, setShowBreakthroughEffect] = useState<boolean>(false);

  const currentRealm: Realm = useMemo(() => REALMS[currentRealmIndex], [currentRealmIndex]);
  const nextRealm: Realm | undefined = useMemo(() => REALMS[currentRealmIndex + 1], [currentRealmIndex]);

  useEffect(() => {
    const gameTick = setInterval(() => {
      setCultivationPoints(prev => prev + pointsPerSecond);
    }, 1000);

    return () => clearInterval(gameTick);
  }, [pointsPerSecond]);

  const addToLog = useCallback((message: string) => {
    setLog(prevLog => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prevLog.slice(0, 9)]);
  }, []);

  const handleBreakthrough = useCallback(() => {
    if (nextRealm && cultivationPoints >= nextRealm.threshold) {
      setCurrentRealmIndex(prev => prev + 1);
      setPointsPerSecond(nextRealm.basePointsPerSecond);
      setCultivationPoints(0);
      addToLog(`CHÚC MỪNG! Đã đột phá thành công tới ${nextRealm.name}!`);
      addToLog(`Tốc độ tu luyện tăng lên ${nextRealm.basePointsPerSecond.toLocaleString('en-US')} tu vi/giây!`);
      setShowBreakthroughEffect(true);
      setTimeout(() => setShowBreakthroughEffect(false), 1500); // Effect duration
    } else {
      addToLog('Tu vi chưa đủ, không thể đột phá.');
    }
  }, [cultivationPoints, nextRealm, addToLog]);
  
  const canBreakthrough = useMemo(() => {
      return nextRealm ? cultivationPoints >= nextRealm.threshold : false;
  }, [cultivationPoints, nextRealm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-black text-white selection:bg-purple-500/30">
      {showBreakthroughEffect && <BreakthroughEffect />}
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen relative z-10">
        <Header />
        
        <main className="w-full max-w-2xl bg-black/30 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-500/20 p-8 border border-purple-500/30 flex flex-col items-center space-y-8">
          <RealmDisplay
            currentRealm={currentRealm}
            nextRealm={nextRealm}
            cultivationPoints={cultivationPoints}
          />

          <CultivationRate pointsPerSecond={pointsPerSecond} />

          <BreakthroughButton
            onClick={handleBreakthrough}
            canBreakthrough={canBreakthrough}
            isMaxRealm={!nextRealm}
          />
        </main>

        <LogPanel log={log} />
      </div>
    </div>
  );
};

export default App;