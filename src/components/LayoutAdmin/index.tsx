import React from 'react'
import FooterAdmin from './FooterAdmin'
import NavbarAdmin from './NavbarAdmin'

interface ILayoutAdmin {
  children: React.ReactNode
}

const LayoutAdmin: React.FC<ILayoutAdmin> = (props) => {
  const { children } = props
  return (
    <>
      <NavbarAdmin />
      <div className="container">
        <div className="main">{children}</div>
      </div>
      <FooterAdmin />
    </>
  )
}

export default LayoutAdmin
