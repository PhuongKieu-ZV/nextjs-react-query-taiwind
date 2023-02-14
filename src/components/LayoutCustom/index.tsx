import React from 'react'
import Navbar from '../Navbar'

interface ILayout {
  children: React.ReactNode
}

const LayoutCustom: React.FC<ILayout> = (props) => {
  const { children } = props
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default LayoutCustom
