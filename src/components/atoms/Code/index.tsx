import React, { PropsWithChildren } from 'react'
import Styles from "./Code.module.scss"

interface Props {
  className?: string
}

export const Code: React.FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <code className={className} >
      {children}
    </code>
  )
}
