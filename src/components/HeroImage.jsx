import { useRef, useState } from "react"
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "motion/react"
import orange from "../assets/orange.avif"
import blue from "../assets/blue.avif"
import green from "../assets/green.avif"

const HeroImage = () => {
  const [clicked, setClicked] = useState(orange)
  const containerRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // inverted parallax: move opposite direction
  const translateX = useTransform(x, [-0.5, 0.5], [20, -20])
  const translateY = useTransform(y, [-0.5, 0.5], [20, -20])

  // we’ll store where the mouse entered
  const startRef = useRef({ x: 0, y: 0 })
  const rectRef = useRef(null)

  const handleMouseEnter = (e) => {
    rectRef.current = containerRef.current.getBoundingClientRect()
    startRef.current = { x: e.clientX, y: e.clientY }
    x.set(0)
    y.set(0)
  }

  const handleMouseMove = (e) => {
    if (!rectRef.current) return
    const dx = e.clientX - startRef.current.x
    const dy = e.clientY - startRef.current.y

    // normalize movement relative to element size
    const nx = dx / rectRef.current.width
    const ny = dy / rectRef.current.height

    x.set(nx)
    y.set(ny)
  }

  const handleMouseLeave = () => {
    rectRef.current = null
    animate(x, 0, { type: "spring", stiffness: 120, damping: 15 })
    animate(y, 0, { type: "spring", stiffness: 120, damping: 15 })
  }

  const handleClick = (color) => setClicked(color)

  return (
    <div
      ref={containerRef}
      className="relative mt-[20px] mx-auto max-w-[93%] rounded-3xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="relative w-full h-auto"
      >
        <img
          src={orange}
          alt=""
          className={`w-full h-auto scale-110 absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
            clicked === orange ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={blue}
          alt=""
          className={`w-full h-auto scale-110 absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
            clicked === blue ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={green}
          alt=""
          className={`w-full h-auto scale-110 transition-opacity duration-700 ease-in-out ${
            clicked === green ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>

      {/* Text + dots */}
      <div className="absolute w-[30%] height-[20%] top-1/2 right-[30px] flex items-center justify-end gap-5">
        <div className="flex flex-col text-white">
          <AnimatePresence mode="wait">
            {clicked === orange ? (
              <motion.div key="orange" className="flex flex-col">
                <motion.span
                  className="text-[48px] font-[600] tracking-[-0.06em]"
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 }}}
                >A comfy icon</motion.span>
                <motion.span 
                  className="text-[18px] font-[600] tracking-[-0.06em] flex self-end relative -translate-y-[7px]"
                  initial={{ opacity: 0}}
                  exit={{ opacity: 0, transition: { duration: 0.3 }}}
                  animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 }}}>
                    Discover Bulge
                </motion.span>
              </motion.div>
            ) : clicked === blue ? (
              <motion.div key="blue" className="flex flex-col">
                <motion.span 
                  className="text-[48px] font-[600] tracking-tighter"
                  initial={{ opacity: 0}}
                  exit={{ opacity: 0, transition: { duration: 0.3 }}}
                  animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 }}}
                >A classy seat</motion.span>
                <motion.span 
                  className="text-[18px] font-[600] tracking-[-0.06em] flex self-end relative -translate-y-[7px]"
                  initial={{ opacity: 0}}
                  exit={{ opacity: 0, transition: { duration: 0.3 }}}
                  animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 }}}>
                    Discover Rogue
                </motion.span>
              </motion.div>
            ) : (
              <motion.div key="green" className="flex flex-col">
                <motion.span 
                  className="text-[48px] font-[600] tracking-tighter"
                  initial={{ opacity: 0}}
                  exit={{ opacity: 0, transition: { duration: 0.3 }}}
                  animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 }}}
                >An elegant crib</motion.span>
                <motion.span 
                  className="text-[18px] font-[600] tracking-[-0.06em] flex self-end relative -translate-y-[7px]"
                  initial={{ opacity: 0}}
                  exit={{ opacity: 0, transition: { duration: 0.3 }}}
                  animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 }}}>
                    Discover Andy
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-[10px] relative translate-y-[4px]">
          <button
            className={`h-[10px] w-[10px] rounded-full ${
              clicked === orange ? "bg-white" : "bg-white/30"
            } hover:bg-white/90 transition-all duration-700`}
            onClick={() => handleClick(orange)}
          ></button>
          <button
            className={`h-[10px] w-[11px] rounded-full ${
              clicked === blue ? "bg-white" : "bg-white/30"
            } hover:bg-white/90 transition-all duration-700`}
            onClick={() => handleClick(blue)}
          ></button>
          <button
            className={`h-[10px] w-[11px] rounded-full ${
              clicked === green ? "bg-white" : "bg-white/30"
            } hover:bg-white/90 transition-all duration-700`}
            onClick={() => handleClick(green)}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
