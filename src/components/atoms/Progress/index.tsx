import React, { PropsWithChildren } from 'react'
import Styles from "./Progress.module.scss"

interface Props {
  className?: string
  value?: string | number | readonly string[]
  max?: string | number 
}

export const Progress:React.FC<PropsWithChildren<Props>> = ({children,className,value,max}) => {
  return (
    <progress className={`${className}`} value={value} max={max} >
      {children}
    </progress>
  )
}
