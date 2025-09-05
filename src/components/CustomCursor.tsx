import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    const speed = 0.25; // Increased speed for tighter following (0.25 from 0.1)

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      if (follower) {
        // Subtract half of follower's width and height for center alignment
        follower.style.transform = `translate3d(${posX - 12}px, ${posY - 12}px, 0)`;
      }
      if (cursor) {
        // Subtract half of cursor's width and height for center alignment
        cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate3d(0,0,0)',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 24,  // smaller circle (was 40)
          height: 24, // smaller circle (was 40)
          border: '2px solid #FF4444',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate3d(0,0,0)',
          transition: 'background-color 0.3s ease',
          zIndex: 9998,
          mixBlendMode: 'difference',
          backgroundColor: 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;
