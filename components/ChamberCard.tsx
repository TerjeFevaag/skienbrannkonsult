import { ReactNode, CSSProperties } from 'react'

interface ChamberCardProps {
  index: number
  children: ReactNode
  stepX?: number
  stepY?: number
}

export default function ChamberCard({ index, children, stepX = 28, stepY = 18 }: ChamberCardProps) {
  const style = {
    '--chamber-x': `${index * stepX}px`,
    '--chamber-y': `${index * stepY}px`,
  } as CSSProperties

  return (
    <div className="chamber-step" style={style}>
      {children}
    </div>
  )
}
