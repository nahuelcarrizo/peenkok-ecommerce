import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export function useAnimationContext() {
  return useContext(AnimationContext);
}

export function AnimationProvider({ children }) {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [pageTransitionCompleted, setPageTransitionCompleted] = useState(false)

  const animationStatus = (state) => {
    // console.log("estado: " + state)
    setAnimationCompleted(true)
  }
  const animationPageStatus = (state) => {
    setPageTransitionCompleted(state)
  }
  return (
    <AnimationContext.Provider value={{ animationCompleted, animationStatus,animationPageStatus, pageTransitionCompleted }}>
      {children}
    </AnimationContext.Provider>
  );
}