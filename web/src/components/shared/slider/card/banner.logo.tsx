import React, { useState } from 'react'

import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '../../../../hooks/isomorphicEffect'

const Logo = ({ color }) => {
  const [fill, setFill] = useState('#fff')
  useIsomorphicLayoutEffect(() => {
    if (color) {
      setFill(color)
    }
  }, [color])

  return (
    <svg viewBox="-165.191 100 700 300" className="svg-css">
      <g id="Capa_1-2" transform="matrix(1, 0, 0, 1, -180.836828, 119.249454)">
        <g id="n5FYb9" transform="matrix(1, 0, 0, 1, 31.332556, 24.966585)">
          <path
            d="M 498.352 49.32 C 541.782 49.69 575.062 84.19 575.042 126.02 C 575.022 168.79 540.872 203.12 498.352 203.1 C 455.922 203.08 421.852 168.83 421.752 126.11 C 421.652 84.46 454.762 49.73 498.352 49.32 Z M 498.392 173.51 C 524.162 173.48 545.632 151.89 545.402 125.93 C 545.172 99.6 523.622 79.01 498.322 79.05 C 473.292 79.09 451.482 99.47 451.412 126.08 C 451.352 152.19 472.722 173.53 498.382 173.5 L 498.392 173.51 Z"
            fill={fill}
            transform="scale(0.89, 0.85) translate(56, -6)"
          />
          <path
            d="M 287.888 117.16 C 287.888 116.12 287.888 115.5 287.888 114.87 C 287.938 94.57 287.988 74.27 288.028 53.96 C 288.028 50.56 288.688 49.9 292.078 49.9 C 299.448 49.9 306.808 49.9 314.178 49.9 C 317.638 49.9 318.228 50.5 318.228 53.93 C 318.138 102.43 318.038 150.93 317.948 199.43 C 317.948 200.9 317.948 202.38 316.228 202.95 C 314.428 203.55 313.298 202.46 312.328 201.18 C 307.348 194.61 302.368 188.03 297.398 181.45 C 285.588 165.83 273.778 150.21 261.958 134.59 C 261.608 134.13 261.238 133.68 260.478 133.25 L 260.478 135.24 C 260.478 156.14 260.478 177.03 260.478 197.93 C 260.478 198.52 260.508 199.12 260.458 199.71 C 260.298 201.8 259.688 202.5 257.578 202.51 C 249.378 202.55 241.188 202.52 232.988 202.53 C 231.318 202.53 230.488 201.63 230.328 200.05 C 230.258 199.4 230.278 198.75 230.288 198.09 C 230.388 149.89 230.488 101.68 230.588 53.48 C 230.588 53.24 230.588 53 230.588 52.77 C 230.528 51.26 231.048 50.09 232.558 49.55 C 234.068 49.01 235.048 49.82 235.898 50.91 C 238.378 54.09 240.868 57.27 243.348 60.45 C 257.788 78.91 272.228 97.38 286.668 115.84 C 286.948 116.19 287.268 116.5 287.878 117.16 L 287.888 117.16 Z"
            fill={fill}
            transform="scale(1, 0.8)"
          />
          <path
            d="M 370.995 141.76 C 367.915 147.75 364.945 153.48 362.035 159.24 C 361.765 159.78 361.835 160.51 361.835 161.15 C 361.825 173.62 361.835 186.09 361.835 198.56 C 361.835 201.93 361.235 202.54 357.925 202.54 C 350.495 202.54 343.075 202.54 335.645 202.54 C 332.305 202.54 331.645 201.9 331.645 198.63 C 331.645 150.24 331.645 101.85 331.645 53.46 C 331.645 50.34 332.055 49.91 335.095 49.9 C 342.875 49.89 350.655 49.89 358.445 49.9 C 361.365 49.9 361.835 50.38 361.835 53.34 C 361.835 67.83 361.835 82.31 361.835 96.8 L 361.835 98.68 C 361.935 98.71 362.035 98.74 362.145 98.77 C 362.455 98.23 362.775 97.71 363.055 97.16 C 370.805 82.26 378.575 67.38 386.265 52.45 C 387.245 50.54 388.475 49.82 390.595 49.85 C 398.555 49.95 406.515 49.89 414.475 49.89 C 415.065 49.89 415.665 49.88 416.255 49.93 C 418.715 50.17 419.605 51.69 418.485 53.89 C 417.145 56.54 415.705 59.13 414.305 61.75 C 405.545 78.06 396.805 94.37 388.005 110.66 C 387.335 111.89 387.335 112.8 388.005 114.04 C 403.115 141.82 418.175 169.62 433.245 197.42 C 433.385 197.68 433.535 197.94 433.675 198.2 C 435.075 200.95 434.245 202.49 431.205 202.51 C 422.535 202.56 413.855 202.51 405.185 202.54 C 403.365 202.54 402.455 201.57 401.665 200.07 C 391.845 181.3 381.995 162.55 372.145 143.8 C 371.825 143.18 371.465 142.58 370.995 141.75 L 370.995 141.76 Z"
            fill={fill}
            transform="scale(1, 0.8)"
          />
          <path
            d="M 626.78 141.74 C 623.66 147.8 620.74 153.42 617.89 159.09 C 617.57 159.73 617.58 160.58 617.58 161.34 C 617.56 173.75 617.57 186.16 617.57 198.57 C 617.57 202.03 617.03 202.56 613.52 202.56 C 606.09 202.56 598.67 202.56 591.24 202.56 C 588.08 202.56 587.46 201.97 587.46 198.83 C 587.46 150.32 587.46 101.82 587.46 53.31 C 587.46 50.31 587.85 49.93 590.86 49.92 C 598.52 49.91 606.19 49.92 613.85 49.92 C 617.16 49.92 617.56 50.32 617.57 53.58 C 617.57 68.01 617.57 82.43 617.57 96.86 L 617.57 98.81 C 617.66 98.86 617.74 98.9 617.83 98.95 C 618.13 98.44 618.44 97.93 618.71 97.41 C 626.52 82.41 634.34 67.42 642.09 52.39 C 643.04 50.55 644.24 49.86 646.29 49.88 C 654.31 49.97 662.33 49.92 670.35 49.92 C 670.88 49.92 671.42 49.92 671.95 49.96 C 674.51 50.19 675.41 51.73 674.23 54 C 672.54 57.27 670.77 60.49 669.03 63.74 C 660.61 79.42 652.21 95.11 643.75 110.76 C 643.11 111.94 643.09 112.79 643.75 113.99 C 658.83 141.72 673.86 169.47 688.9 197.21 C 691.17 201.39 690.46 202.56 685.68 202.56 C 677.66 202.56 669.64 202.52 661.62 202.59 C 659.6 202.61 658.37 201.91 657.41 200.06 C 647.65 181.33 637.81 162.64 627.99 143.94 C 627.67 143.33 627.34 142.73 626.81 141.75 L 626.78 141.74 Z"
            fill={fill}
            transform="scale(1, 0.8) translate(-11, 0)"
          />
          <path
            d="m0,126.17c0-23.87,0-47.73,0-71.6,0-.53,0-1.07,0-1.6.06-2.28.75-2.99,2.98-3.06.59-.02,1.19,0,1.78,0,13.19.02,26.38-.11,39.56.08,21.45.3,39,16.26,41.66,37.56,1.38,11.01.16,21.57-5.38,31.35-6.58,11.61-16.72,18.32-29.78,20.34-5.3.82-10.76.64-16.16.79-3.86.11-4.55.7-4.55,4.61,0,17.75,0,35.5,0,53.25,0,.71-.01,1.43-.07,2.13-.14,1.6-1,2.51-2.65,2.51-8.26,0-16.51.03-24.77-.03-2.13-.01-2.62-.73-2.62-3.31,0-15.32,0-30.63,0-45.95,0-9.02,0-18.05,0-27.07Zm30.11-31.09s.04,0,.06,0c0,4.57,0,9.14,0,13.71,0,1.49.64,2.75,2.2,2.73,4.25-.06,8.62.2,12.73-.66,7.45-1.56,12.24-8.77,11.74-16.54-.53-8.26-6.04-14.59-13.78-15.53-2.99-.36-6.04-.28-9.07-.3-3.07-.02-3.87.82-3.89,3.94-.02,4.22,0,8.43,0,12.65Z"
            fill={fill}
            transform="scale(1, 0.8)"
          />
          <g>
            <path
              d="M 99.928 126.2 C 99.928 102.16 99.928 78.11 99.928 54.07 C 99.928 53.25 99.838 52.31 100.188 51.63 C 100.538 50.94 101.318 50.39 102.028 50.01 C 102.498 49.76 103.188 49.91 103.788 49.91 C 118.458 49.91 133.128 49.91 147.808 49.91 C 151.038 49.91 151.648 50.5 151.658 53.74 C 151.678 61.04 151.678 68.34 151.658 75.65 C 151.658 79.19 150.798 79.99 147.178 80 C 143.678 80 140.168 79.97 136.668 80.01 C 131.838 80.06 130.098 81.78 130.068 86.57 C 130.038 92.09 130.038 97.61 130.068 103.13 C 130.088 107.09 131.968 108.99 135.968 109.11 C 138.278 109.18 140.598 109.11 142.918 109.17 C 145.328 109.22 146.308 110.17 146.308 112.53 C 146.328 121.55 146.338 130.58 146.308 139.6 C 146.308 142.17 145.468 142.9 142.828 142.96 C 140.158 143.02 137.478 142.98 134.828 143.25 C 131.668 143.57 130.138 145.28 130.098 148.45 C 130.028 154.39 130.008 160.32 130.118 166.26 C 130.208 170.64 132.228 172.48 136.588 172.5 C 140.508 172.52 144.428 172.49 148.348 172.51 C 150.988 172.53 151.638 173.13 151.648 175.76 C 151.678 183.6 151.678 191.43 151.648 199.27 C 151.638 201.85 150.938 202.53 148.308 202.53 C 133.338 202.55 118.368 202.55 103.398 202.53 C 100.508 202.53 99.928 201.85 99.928 198.68 C 99.928 176.06 99.928 153.44 99.928 130.82 C 99.928 129.28 99.928 127.73 99.928 126.19 L 99.928 126.2 Z"
              fill={fill}
              transform="scale(1, 0.8)"
            />
            <path
              d="M 113.81 40.8 C 113.03 40.15 112.16 39.62 111.56 38.88 C 108.83 35.52 106.17 32.1 103.5 28.7 C 101.42 26.05 101.53 25.01 104.14 22.95 C 112.05 16.69 119.97 10.45 127.88 4.2 C 129.28 3.1 130.65 1.96 132.08 0.9 C 133.82 -0.4 134.88 -0.31 136.18 1.36 C 139.2 5.25 142.19 9.16 145.15 13.1 C 146.43 14.81 146.29 15.89 144.61 17.22 C 135.23 24.67 125.82 32.1 116.4 39.5 C 115.73 40.03 114.85 40.3 113.82 40.81 L 113.81 40.8 Z"
              fill={fill}
              transform="scale(1, 0.8)"
            />
          </g>
          <path
            d="M 165.091 126.18 C 165.091 102.2 165.091 78.22 165.091 54.24 C 165.091 53.59 165.081 52.93 165.131 52.28 C 165.241 50.82 166.031 49.94 167.521 49.94 C 183.141 49.92 198.761 49.92 214.381 49.94 C 216.061 49.94 216.791 51.08 216.821 52.64 C 216.871 55.43 216.851 58.22 216.851 61.01 C 216.851 65.94 216.871 70.86 216.851 75.79 C 216.841 78.96 215.841 79.96 212.701 79.98 C 209.081 80.01 205.451 79.96 201.831 79.99 C 197.101 80.03 195.321 81.69 195.251 86.39 C 195.161 92.21 195.181 98.02 195.241 103.84 C 195.271 106.99 197.231 108.89 200.581 109.06 C 203.011 109.18 205.451 109.1 207.881 109.14 C 210.561 109.18 211.501 110.13 211.501 112.83 C 211.511 121.67 211.511 130.52 211.501 139.36 C 211.501 142.1 210.641 142.88 207.841 142.93 C 205.231 142.98 202.611 142.95 200.021 143.21 C 196.781 143.54 195.241 145.32 195.221 148.53 C 195.181 154.35 195.171 160.16 195.221 165.98 C 195.261 170.53 197.271 172.46 201.811 172.47 C 205.731 172.48 209.651 172.45 213.571 172.48 C 216.121 172.5 216.831 173.22 216.841 175.8 C 216.851 183.58 216.851 191.35 216.841 199.13 C 216.841 201.74 216.081 202.51 213.411 202.51 C 198.441 202.53 183.481 202.53 168.511 202.51 C 165.671 202.51 165.101 201.85 165.101 198.81 C 165.101 174.59 165.101 150.37 165.101 126.15 L 165.091 126.18 Z"
            fill={fill}
            transform="scale(1, 0.8)"
          />
          <path
            d="M 703.13 46.99 C 702.61 47.92 701.6 48.48 700.53 48.41 C 700.11 48.38 699.71 48.34 699.32 48.23 C 695.15 47.07 693.9 46.76 689.75 45.53 C 686.52 44.58 686.01 43.67 686.94 40.48 C 689.76 30.8 692.59 21.12 695.42 11.44 C 695.92 9.73 696.38 8.01 696.93 6.32 C 697.59 4.25 698.51 3.71 700.54 4.31 C 705.26 5.72 709.96 7.18 714.65 8.68 C 716.68 9.33 717.19 10.29 716.6 12.35 C 713.27 23.86 703.62 45.93 703.62 45.93 C 703.62 45.93 703.34 46.64 703.14 47 L 703.13 46.99 Z"
            fill={fill}
            transform="scale(1, 0.8) translate(-10, 0)"
          />
        </g>
      </g>
    </svg>
  )
}

export default Logo
