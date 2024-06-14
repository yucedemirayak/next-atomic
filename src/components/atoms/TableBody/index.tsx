import React, { PropsWithChildren } from 'react'
import Styles from "./TableBody.module.scss"

interface Props {
  className?: string
}

export const TableBody:React.FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <tbody className={`${className}`} >
      {children}
    </tbody>
  )
}
