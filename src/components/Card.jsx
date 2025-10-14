import { motion, useMotionValue, useTransform, animate } from 'motion/react'
import React from 'react'
import { useState, useRef } from 'react'

const Card = ({image,hoverImage, name, price, category}) => {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // inverted parallax: move opposite direction
  const translateX = useTransform(x, [-0.5, 0.5], [10, -10]);
  const translateY = useTransform(y, [-0.5, 0.5], [10, -10]);
  
  const startRef = useRef({ x: 0, y: 0 });
  const rectRef = useRef(null);

  const handleMouseEnter = (e) => {
    setHovered(true);
    rectRef.current = containerRef.current.getBoundingClientRect();
    startRef.current = { x: e.clientX, y: e.clientY };
    x.set(0);
    y.set(0);
  };

  const handleMouseMove = (e) => {
    if (!rectRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;

    const nx = dx / rectRef.current.width;
    const ny = dy / rectRef.current.height;

    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rectRef.current = null;
    animate(x, 0, { type: "spring", stiffness: 120, damping: 15 });
    animate(y, 0, { type: "spring", stiffness: 120, damping: 15 });
  };
  
  return (
        <div 
          ref={containerRef}
          className={`rounded-[20px] cursor-pointer p-[12px] transition-colors duration-300 ${hovered ? 'bg-white' : 'bg-transparent'}`}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className='relative w-full h-auto overflow-hidden rounded-[10px]'>
            <motion.img 
              src={image} 
              alt="" 
              style={{ x: translateX, y: translateY }}
              className={`rounded-[10px] w-full h-auto scale-110 transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}
            />
            <motion.img 
              src={hoverImage} 
              alt="" 
              style={{ x: translateX, y: translateY }}
              className={`rounded-[10px] w-full h-auto scale-110 object-cover absolute top-0 left-0 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          
          <div className='flex-col mt-[15px]'>
            <div className='flex justify-between'>
              <span className='text-black text-[18px]'>{name}</span>
              <span className='text-[#13101466] text-[18px]'>{price}</span>
            </div>
            <span className='text-[#13101466] text-[12px]'>{category}</span>
          </div>
        </div>
  )
}

export default Card