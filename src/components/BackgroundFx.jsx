import { useEffect, useRef } from 'react';

export default function BackgroundFx() {
    const bgRef = useRef(null);

    useEffect(() => {
        const bg = bgRef.current;
        if (!bg) return;

        // Clear previous children to avoid duplicates on strict mode
        bg.innerHTML = '';

        const count = 50;
        for (let i = 0; i < count; i++) {
            // Yıldızlar
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 20 + 10 + 'px';
            star.style.width = size;
            star.style.height = size;
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.transform = `rotate(${Math.random() * 360}deg)`;
            bg.appendChild(star);

            // Simler/Parıltılar
            const glitter = document.createElement('div');
            glitter.className = 'glitter';
            const gSize = Math.random() * 3 + 1 + 'px';
            glitter.style.width = gSize;
            glitter.style.height = gSize;
            glitter.style.left = Math.random() * 100 + 'vw';
            glitter.style.top = Math.random() * 100 + 'vh';
            glitter.style.animationDelay = Math.random() * 2 + 's';
            bg.appendChild(glitter);
        }
    }, []);

    return <div className="background-fx" id="bg-fx" ref={bgRef}></div>;
}
