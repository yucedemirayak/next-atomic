import React, { PropsWithChildren } from 'react'
import Styles from "./HeaderCell.module.scss"

interface Props {
  className?: string
}

export const HeaderCell:React.FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <th className={className} >
      {children}
    </th>
  )
}
