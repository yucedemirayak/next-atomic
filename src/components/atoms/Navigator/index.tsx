import React, { PropsWithChildren } from 'react'
import Styles from "./Navigator.module.scss"

interface Props {
  className?: string
}

export const Navigator:React.FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <nav className={`${className}`} >
      {children}
    </nav>
  )
}
