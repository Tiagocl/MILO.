import React from 'react'
import ScrollReveal from './animated/ScrollReveal'

const whoAreWe = () => {
  return (
    <div className='flex gap-[35px] w-full my-[150px] mx-auto max-w-[93%]'>
        <div className='w-[16%]'>
            <ScrollReveal
                baseOpacity={0}
                enableBlur={false}
                baseRotation={0}
                blurStrength={15}
                textClassName='text-[12px] font-[600]'
                rotationEnd={'top center'}
                wordAnimationEnd={'top center'}
            >
                The studio
            </ScrollReveal>
             </div>
            <div>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={15}
                    textClassName='text-[48px] font-[600] leading-[35px] tracking-[-0.06em] block'
                    rotationEnd={'top center'}
                    wordAnimationEnd={'top center'}
                    containerClassName='mb-0'
                >
                    Milo is a danish small independent
                </ScrollReveal>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={15}
                    textClassName='text-[48px] font-[600] leading-[35px] tracking-[-0.06em] block'
                    rotationEnd={'top center'}
                    wordAnimationEnd={'top center'}
                    containerClassName='mb-0'
                >
                    design studio crafting furniture and
                </ScrollReveal>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={15}
                    textClassName='text-[48px] font-[600] leading-[35px] tracking-[-0.06em] block'
                    rotationEnd={'top center'}
                    wordAnimationEnd={'top center'}
                    containerClassName='mb-0'
                >
                    timeless interior pieces with the
                </ScrollReveal>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={15}
                    textClassName='text-[48px] font-[600] leading-[35px] tracking-[-0.06em] block'
                    rotationEnd={'top center'}
                    wordAnimationEnd={'top center'}
                    containerClassName='mb-0'
                >
                    uttermost love and attention to details
                </ScrollReveal>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={0}
                    blurStrength={15}
                    textClassName='text-[48px] font-[600] leading-[35px] tracking-[-0.06em] block'
                    rotationEnd={'top center'}
                    wordAnimationEnd={'top center'}
                    containerClassName='mb-0'
                >
                    since 1996.
                </ScrollReveal>
            </div>
       
        
    </div>
  )
}


export default whoAreWe