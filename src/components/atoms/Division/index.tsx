import React, { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export const Division:React.FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <div className={className} >
      {children}
    </div>
  )
}
