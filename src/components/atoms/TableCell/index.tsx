import React, { PropsWithChildren } from 'react'
import Styles from "./TableCell.module.scss"

interface Props {
  className?: string
}

export const TableCell:React.FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <td className={`${className}`} >
      {children}
    </td>
  )
}
