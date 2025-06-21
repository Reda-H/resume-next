'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import mainImage from "@/assets/resume-picture-headshot2.jpg"
import altImage from "@/assets/resume-picture-point-top-left.png"


const MouseFollowWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [compPos, setCompPos] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

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
    const handleLinkHover = () => {
      setIsHoveringLink(true);
    };

    const handleLinkLeave = () => {
      setIsHoveringLink(false);
    };

    // Add event listeners to all links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      // Cleanup event listeners
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
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
        <div className="w-12 h-12 bg-gray-500 backdrop-blur-sm rounded-full rounded-tl-[4px] border-2 border-gray-500 relative">
          {/* Main image - always visible */}
          <Image
            src={mainImage}
            alt="Profile"
            className="rounded-full object-cover"
            unoptimized
            fill
            loading="lazy"
          />
          {/* Hover image - appears on top when hovering links */}
          <Image
            src={altImage}
            alt="Profile Hover"
            className={`rounded-full object-cover transition-opacity duration-200 ${
              isHoveringLink ? 'opacity-100' : 'opacity-0'
            }`}
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