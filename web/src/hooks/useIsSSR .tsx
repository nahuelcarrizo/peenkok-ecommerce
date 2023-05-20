import { useEffect, useState } from 'react'

const useIsSSR = () => {
  const [isSsr, setIsSsr] = useState(true)

  useEffect(() => {
    setIsSsr(false)
  }, [])

  return isSsr
}

export default useIsSSR
