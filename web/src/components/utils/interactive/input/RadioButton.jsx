import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin'
import React from 'react'
import { device } from '../../../../config/device'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from '../../../../hooks/isomorphicEffect'

gsap.registerPlugin(MorphSVGPlugin)

const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0.5vw;
  align-items: center;
  padding: 0 0.8vw 0 0.4vw;
  position: relative;
  --toggle: #fff;
  --toggle-active: #f36600;
  --toggle-border: #c9ad99;
  --toggle-border-hover: #ca8757;
  --toggle-border-active: #f36600;
  --toggle-inner: #fff;
  --switch: #d1d6ee;
  --switch-hover: #cacfe6;
  --switch-active: #f36600;
  --switch-dot: #fff;
  --switch-dot-shadow: #{rgba(#00093d, 0.1)};
  --svg-fill: var(--toggle);
  --svg-stroke: var(--toggle-border);
  --svg-stroke-width: 1px;
  --svg-transform-duration: 0.1s;
  input {
    display: block;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    width: 22px;
    height: 22px;
    &:hover {
      & + svg {
        --svg-stroke: var(--toggle-border-hover);
      }
    }
    &:checked {
      & + svg {
        --svg-fill: var(--toggle-active);
        --svg-stroke: var(--toggle-border-active);
        & + .inner {
          --svg-scale: 1;
        }
      }
    }
  }
  svg {
    fill: var(--svg-fill, none);
    stroke: var(--svg-stroke, none);
    stroke-width: var(--svg-stroke-width, 0);
    stroke-linecap: round;
    stroke-linejoin: round;
    display: block;
    width: var(--svg-width, 28px);
    height: var(--svg-height, 28px);
    position: absolute;
    top: var(--svg-top, -3px);
    left: var(--svg-left, -3px);
    pointer-events: none;
    transform: scale(var(--svg-scale, 1)) translateZ(0);
    transition: stroke 0.3s, fill 0.3s,
      stroke-dashoffset 0.15s ease var(--svg-delay, 0s),
      transform var(--svg-transform-duration, 0s);
  }
  .inner {
    --svg-fill: var(--toggle-inner);
    --svg-stroke-width: 0;
    --svg-width: 14px;
    --svg-height: 14px;
    --svg-top: 4px;
    --svg-left: 4px;
    --svg-scale: 0;
  }
`

const RadioButtonContent = styled.div`
  @media ${device.portatil} {
    transform: scale(0.5);
  }
  @media ${device.portatilL} {
    transform: scale(0.65);
  }
`
const RadioButton = ({ planChoice, text }) => {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.radio').forEach(element => {
        const path = element.querySelectorAll('path')
        const input = element.querySelector('input')

        element.addEventListener('pointerdown', e => {
          if (element.classList.contains('active')) {
            return
          }
          gsap.to(path, {
            morphSVG:
              'M25.5 14C25.5 19.799 19.799 23.5 14 23.5C8.20101 23.5 2.5 19.799 2.5 14C2.5 8.20101 8.20101 4.5 14 4.5C19.799 4.5 25.5 8.20101 25.5 14Z',
            duration: 0.15,
          })
        })

        element.addEventListener('click', e => {
          if (element.classList.contains('active')) {
            return
          }

          element.classList.add('active')

          gsap.fromTo(
            path,
            {
              morphSVG:
                'M25.5 14C25.5 19.799 19.799 23.5 14 23.5C8.20101 23.5 2.5 19.799 2.5 14C2.5 8.20101 8.20101 4.5 14 4.5C19.799 4.5 25.5 8.20101 25.5 14Z',
              duration: 0.15,
            },
            {
              keyframes: [
                {
                  morphSVG:
                    'M23.5 14C23.5 19.799 19.799 25.5 14 25.5C8.20101 25.5 4.5 19.799 4.5 14C4.5 8.20101 8.20101 2.5 14 2.5C19.799 2.5 23.5 8.20101 23.5 14Z',
                  duration: 0.15,
                },
                {
                  morphSVG:
                    'M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14Z',
                  duration: 0.6,
                  ease: 'elastic.out(1, .6)',
                  onComplete() {
                    element.classList.remove('active')
                  },
                },
              ],
            },
          )
        })
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <Label className="radio">
      <RadioButtonContent className="radio-container">
        <input type="radio" name="plan" id={planChoice} value="oneTime" />
        <svg viewBox="0 0 28 28">
          <path d="M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14Z" />
        </svg>
        <svg class="inner" viewBox="0 0 28 28">
          <path d="M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14Z" />
        </svg>
      </RadioButtonContent>
      <label style={{ cursor: 'pointer' }} for={planChoice}>
        {text}
      </label>
    </Label>
  )
}

export default RadioButton
