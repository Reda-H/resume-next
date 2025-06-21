'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import mainImage from "@/assets/resume-picture-headshot2.jpg"


const MouseFollowWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [compPos, setCompPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setCompPos({
        x: mousePos.x + 20,
        y: mousePos.y
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [mousePos]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Your website content */}
      {children}

      {/* Mouse follower */}
      <div
        id='mouse-follower'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none', // This ensures the follower doesn't interfere with clicks
          zIndex: 50,
          transform: `translate(${compPos.x}px, ${compPos.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="w-12 h-12 bg-gray-500 backdrop-blur-sm rounded-full rounded-tl-[4px] border-2 border-gray-500">
          <Image
            src={mainImage}
            alt="Profile"
            className="rounded-full object-cover"
            unoptimized
            fill
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default MouseFollowWrapper;