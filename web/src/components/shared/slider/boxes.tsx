import React, { useEffect, useRef } from 'react'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export default function SectionHeader({ title }) {
  const main = useRef()

  /*  useEffect(() => {
    const ctx = gsap.context(self => {
      const boxes = self.selector('.box')
      boxes.forEach(box => {
        gsap.to(box, {
          x: 150,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top center',
            end: 'top top',
            markers: true,
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, []) */

  return (
    <div
      className="section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '30vh',
      }}
      /*       ref={main} */
    >
      {title.split('').map((letter, index) => (
        <div key={index} className="box">
          {letter.toUpperCase()}
        </div>
      ))}
    </div>
  )
}
