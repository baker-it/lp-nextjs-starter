'use client'
import { motion } from 'framer-motion'
const variantsMap: any = {
  none: {},
  fade: { hidden:{opacity:0}, show:{opacity:1} },
  slideUp: { hidden:{opacity:0, y:24}, show:{opacity:1, y:0} },
  reveal: { hidden:{clipPath:'inset(0 0 100% 0)'}, show:{clipPath:'inset(0 0 0% 0)'} },
}
export function AnimWrap({anim, children, className}:{anim?:any, children:any, className?:string}){
  const v = variantsMap[anim?.variant || 'fade'] || variantsMap.fade
  const transition:any = { delay: anim?.delay || 0, duration: anim?.duration || 0.5 }
  if (anim?.easing) transition.ease = anim.easing
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once:true, margin:'-10%' }}
      variants={v} transition={transition} className={className}>
      {children}
    </motion.div>
  )
}
