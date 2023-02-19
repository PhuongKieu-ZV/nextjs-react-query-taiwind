import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import Navbar from '../Navbar'
import LayoutAdmin from '../LayoutAdmin/index'

interface ILayout {
  children: React.ReactNode
}

const LayoutCustom: React.FC<ILayout> = (props) => {
  const { children } = props

  const route = useRouter()

  const isAdminPage = useMemo<boolean>(
    () => route.pathname?.includes('admin'),
    [route]
  )

  if (isAdminPage) {
    return <LayoutAdmin>{children}</LayoutAdmin>
  }

  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default LayoutCustom
