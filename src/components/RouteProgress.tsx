import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function RouteProgress() {
  const { pathname } = useLocation()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    setProgress(10)

    const growTimer = window.setTimeout(() => setProgress(65), 80)
    const finishTimer = window.setTimeout(() => setProgress(100), 380)
    const hideTimer = window.setTimeout(() => setVisible(false), 650)

    return () => {
      window.clearTimeout(growTimer)
      window.clearTimeout(finishTimer)
      window.clearTimeout(hideTimer)
    }
  }, [pathname])

  return (
    <div
      aria-hidden="true"
      className={`route-progress${visible ? ' visible' : ''}`}
    >
      <div style={{ width: `${progress}%` }} />
    </div>
  )
}

export default RouteProgress
