import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
    { count: 10, suffix: '+', label: 'Years of Experience' },
    { count: 1500, suffix: '+', label: 'Happy Customers' },
    { count: 75, suffix: '+', label: 'Destinations Covered' },
    { count: null, display: '24/7', label: 'Customer Support' },
];

function CountUp({ target, suffix }) {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const step = target / (1800 / 16);
                const timer = setInterval(() => {
                    start += step;
                    if (start >= target) { start = target; clearInterval(timer); }
                    setVal(Math.floor(start));
                }, 16);
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return <span ref={ref}>{val}{suffix}</span>;
}

export default function Stats() {
    return (
        <div id="stats" className="stats">
            <div className="stats-inner">
                {stats.map((s, i) => (
                    <div className="stat-item" key={i}>
                        <div className="stat-num">
                            {s.display ? s.display : <CountUp target={s.count} suffix={s.suffix} />}
                        </div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
