
import React from 'react';

// This is a simple visual effect component. It doesn't need to be defined inside the parent.
const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute rounded-full bg-cyan-300" style={style}></div>
);

const BreakthroughEffect: React.FC = () => {
    const particles = Array.from({ length: 50 }).map((_, i) => {
        const size = Math.random() * 5 + 2;
        const angle = Math.random() * 360;
        const radius = Math.random() * 40 + 40; // vw/vh
        const style: React.CSSProperties = {
            width: `${size}px`,
            height: `${size}px`,
            left: '50%',
            top: '50%',
            transform: `rotate(${angle}deg) translateX(${radius}vw) scale(0)`,
            animation: `explode 1.5s ${Math.random() * 0.2}s ease-out forwards`,
        };
        return <Particle key={i} style={style} />;
    });

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <style>
                {`
                    @keyframes explode {
                        0% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--radius)) scale(0); opacity: 1; }
                        50% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(calc(var(--radius) * 1.5)) scale(1.5); opacity: 0.8; }
                        100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(calc(var(--radius) * 2)) scale(0); opacity: 0; }
                    }
                    .particle {
                        position: absolute;
                        border-radius: 50%;
                        background-color: #67e8f9; /* cyan-300 */
                        --angle: ${Math.random() * 360}deg;
                        --radius: ${Math.random() * 50 + 50}vmin;
                        animation: explode 1.5s ease-out forwards;
                    }
                `}
            </style>
            {Array.from({ length: 50 }).map((_, i) => {
                const size = Math.random() * 5 + 2;
                return <div key={i} className="particle" style={{ width: `${size}px`, height: `${size}px`, animationDelay: `${Math.random() * 0.2}s` }}></div>
            })}
            <div className="absolute inset-0 bg-white animate-flash"></div>
            <style>
                {`
                    @keyframes flash {
                        0% { opacity: 0.7; }
                        100% { opacity: 0; }
                    }
                    .animate-flash {
                        animation: flash 1s ease-out forwards;
                    }
                `}
            </style>
        </div>
    );
};

export default BreakthroughEffect;
