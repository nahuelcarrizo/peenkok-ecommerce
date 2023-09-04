import React, { useRef, useState } from 'react'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import buildSeamlessLoop from '../../hooks/buildSeamlessLoop'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'

const Container = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 50vh;
`
const Content = styled.div`
  color: black;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`
const Cards = styled.ul`
  position: absolute;
  width: 14rem;
  height: 18rem;
  /*   top: 40%;
  left: 50%; */
  transform: translate(-50%, -50%);
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 14rem;
    height: 18rem;
    text-align: center;
    line-height: 18rem;
    font-size: 2rem;
    font-family: sans-serif;
    background-color: #9d7cce;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.8rem;
  }
`

const Actions = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`
const LatestSocial = (props: any) => {
  const ContentRef = useRef(null)
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let iteration = 0
      const spacing = 0.1
      const snap = gsap.utils.snap(spacing)
      const cards = gsap.utils.toArray('.cards li')
      const seamlessLoop = buildSeamlessLoop(cards, spacing)

      function wrapForward(trigger) {
        // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
        iteration++
        trigger.wrapping = true
        trigger.scroll(trigger.start + 0.2)
        console.log('wrapp forward')
      }

      function wrapBackward(trigger) {
        console.log('wrapp backward')
        // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
        iteration--
        if (iteration < 0) {
          // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
          iteration = 9
          seamlessLoop.totalTime(
            seamlessLoop.totalTime() + seamlessLoop.duration() * 10,
          )
          scrub.pause() // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above.
        }
        trigger.wrapping = true
        trigger.scroll(trigger.end - 0.5)
      }

      const scrub = gsap.to(seamlessLoop, {
        totalTime: 0,
        duration: 0.7,
        ease: 'power3',
        paused: true,
      })

      const trigger = ScrollTrigger.create({
        start: 'center center',
        trigger: '.container',
        markers: true,
        onEnter: () => console.log('start'),
        /*        onUpdate: self => {
          scrub.vars.totalTime = snap(
            (iteration + self.progress) * seamlessLoop.duration(),
          )
          scrub.invalidate().restart()
          self.wrapping = false
        }, */
        anticipatePin: 2,
        scrub: true,
        pinType: 'fixed',
        end: '+=1000',
        pin: ContentRef.current,
        pinSpacing: true,
      })

      function scrubTo(totalTime) {
        // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
        let progress =
          (totalTime - seamlessLoop.duration() * iteration) /
          seamlessLoop.duration()
        if (progress > 1) {
          /*          console.log('progress > 1') */
          wrapForward(trigger)
        } else if (progress < 0) {
          /*          console.log('progress < 0') */
          wrapBackward(trigger)
        } else {
          /*  console.log('else') */
          trigger.scroll(
            trigger.start + progress * (trigger.end - trigger.start),
          )
        }
      }

      document
        .querySelector('.next')
        .addEventListener('click', () =>
          scrubTo(scrub.vars.totalTime + spacing),
        )
      document
        .querySelector('.prev')
        .addEventListener('click', () =>
          scrubTo(scrub.vars.totalTime - spacing),
        )
    })

    return () => ctx.revert()
  })

  return (
    <Container className="container">
      <Content className="content" ref={ContentRef}>
        <Cards className="cards">
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
        </Cards>
        <Actions>
          <button className="prev">Prev</button>
          <button className="next">Next</button>
        </Actions>
      </Content>
    </Container>
  )
}

export default LatestSocial
