import React, { PropsWithChildren } from 'react'
import Styles from "./Paragraph.module.scss"

interface Props {
  className?: string
}

export const Paragraph: React.FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <p className={className}>
      {children}
    </p>
  )
}
