import React, { useEffect } from 'react'

import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Scrollbar from 'smooth-scrollbar';

const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.6,
    maxOverscroll: 300,
    glowColor: '#222a2d',
  };
  const options = {
    damping:  0.05,
    thumbMinSize: 20,
    alwaysShowTracks: false,
    continuousScrolling: true,
  };

const SmoothScroll = ({children}) => { 
    useEffect(() => {
    Scrollbar.init(document.body, {
        ...options,
        plugins: {
            overscroll: { ...overscrollOptions },
          },
    });
    Scrollbar.use(OverscrollPlugin);
    }, []);
/*     return (
        <>
            {children}
        </>
    ) */
}

export default SmoothScroll;