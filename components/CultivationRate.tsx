
import React from 'react';

interface CultivationRateProps {
    pointsPerSecond: number;
}

const CultivationRate: React.FC<CultivationRateProps> = ({ pointsPerSecond }) => {
    return (
        <div className="text-center">
            <p className="text-green-400 text-lg font-mono">
                +{pointsPerSecond.toLocaleString('en-US')} tu vi/giây
            </p>
        </div>
    );
}

export default CultivationRate;
