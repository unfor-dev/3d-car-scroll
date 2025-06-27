'use client';
import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { progress } = useProgress(); // Client hook
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setIsLoaded(true);
    }
  }, [progress]);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (!isVisible) {
    // Bu qism clientda render bo‘lgandan keyin ishlaydi
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#0f172a',
          zIndex: 1000,
        }}
      >
        <div
          style={{
            width: '160px',
            height: '12px',
            background: '#334155',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
              borderRadius: '6px',
              transition: 'width 0.3s ease-out',
            }}
          ></div>
        </div>
        <p
          style={{
            color: '#f1f5f9',
            fontSize: '14px',
            marginTop: '12px',
            fontFamily: 'sans-serif',
            letterSpacing: '0.5px',
          }}
        >
          Loading {progress.toFixed(0)}%
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
