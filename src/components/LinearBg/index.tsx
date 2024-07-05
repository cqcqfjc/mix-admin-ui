import React, { useEffect, useRef } from 'react';
import { useRafState } from 'ahooks';

export type LinearBgProps = {
  enabled: boolean;
};

export const LinearBg: React.FC<LinearBgProps> = (props) => {
  const defaultPositions = [
    { el: useRef<HTMLDivElement>(null), xSpeed: 1.1, ySpeed: 1.6 },
    { el: useRef<HTMLDivElement>(null), xSpeed: 1.3, ySpeed: 1.9 },
    { el: useRef<HTMLDivElement>(null), xSpeed: 1.8, ySpeed: 1.4 },
    { el: useRef<HTMLDivElement>(null), xSpeed: 1.9, ySpeed: 1.9 },
    { el: useRef<HTMLDivElement>(null), xSpeed: 1.5, ySpeed: 1.6 },
    { el: useRef<HTMLDivElement>(null), xSpeed: 1.2, ySpeed: 1.3 },
    { el: useRef<HTMLDivElement>(null), xSpeed: 1.1, ySpeed: 1.2 },
    { el: useRef<HTMLDivElement>(null), xSpeed: 1.3, ySpeed: 1.4 }
  ];

  const [positions, setPositions] = useRafState([...defaultPositions]);

  const run = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    for (let i = 0; i < positions.length; i++) {
      let { el, xSpeed, ySpeed } = positions[i];
      if (el.current) {
        const { current } = el;
        const { offsetWidth, offsetHeight } = current;
        const rect = current.getBoundingClientRect();
        let x = rect.left + xSpeed;
        let y = rect.top + ySpeed;
        if (x + offsetWidth >= width) {
          x = width - offsetWidth;
          xSpeed = -xSpeed;
        } else if (x <= 0) {
          x = 0;
          xSpeed = -xSpeed;
        }
        if (y + offsetHeight >= height) {
          y = height - offsetHeight;
          ySpeed = -ySpeed;
        } else if (y <= 0) {
          y = 0;
          ySpeed = -ySpeed;
        }
        current.style.left = `${ x }px`;
        current.style.top = `${ y }px`;
        positions[i].xSpeed = xSpeed;
        positions[i].ySpeed = ySpeed;
      }
    }
    setPositions(positions);
    requestAnimationFrame(run);
  };

  useEffect(() => {
    setPositions([...defaultPositions]);
    props.enabled && run();
  }, []);

  return (
    <div className="linear-bg w-full h-screen absolute left-0 top-0 -z-10 overflow-hidden">
      <div className="w-full h-screen absolute left-0 top-0 -z-10 bg-gray-200 dark:bg-black">
        <div ref={ positions[0].el } className="bg-green-500/90 w-[62vh] top-[30%] left-[10%] absolute aspect-square rounded-full will-change-transform transition-transform"></div>
        <div ref={ positions[1].el } className="bg-green-500/90 w-[62vh] top-[4%] right-[15%] absolute aspect-square rounded-full will-change-transform transition-transform"></div>
        <div ref={ positions[2].el } className="bg-indigo-500/90 w-[62vh] top-[8%] right-[1%] absolute aspect-square rounded-full will-change-transform transition-transform"></div>
        <div ref={ positions[3].el } className="bg-blue-500/90 w-[46vh] top-[30%] right-[33%] absolute aspect-square rounded-full will-change-transform transition-transform"></div>
        <div ref={ positions[4].el } className="bg-orange-500/90 w-[46vh] top-[21%] right-[40%] absolute aspect-square rounded-full will-change-transform transition-transform"></div>
        <div ref={ positions[5].el } className="bg-violet-200/90 w-[52vh] top-[4%] right-[47%] absolute aspect-square rounded-full will-change-transform transition-transform"></div>
        <div ref={ positions[6].el } className="bg-red-500/90 w-[52vh] top-[1%] left-[10%] absolute aspect-square rounded-full will-change-transform transition-transform"></div>
        <div ref={ positions[7].el } className="bg-red-500/90 w-[52vh] top-[40%] left-[50%] absolute aspect-square rounded-full will-change-transform transition-transform"></div>
      </div>
      <div className="absolute left-0 top-0 right-0 bottom-0 backdrop-blur-[100px] bg-white/70 dark:bg-black/70">
      </div>
    </div>
  );
};
