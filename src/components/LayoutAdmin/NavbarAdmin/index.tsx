import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

interface INav {
  display: string
  path: string
}

const mainNav: INav[] = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Product',
    path: '/product',
  },
  {
    display: 'About',
    path: '/about',
  },
  {
    display: 'Service',
    path: '/service',
  },
]

const NavbarAdmin: React.FC = () => {
  const headerRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef?.current?.classList.add('shrink')
      } else {
        headerRef?.current?.classList.remove('shrink')
      }
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const menuLeft = React.useRef<HTMLDivElement>(null)

  const menuToggle = () => menuLeft?.current?.classList?.toggle('active')
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link href={'#'}>
            <Image src="/mark.svg" alt="Your Company" width={50} height={50} />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <Bars3Icon />
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <XMarkIcon />
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item`}
                onClick={menuToggle}
              >
                <Link href={'#'}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <MagnifyingGlassIcon />
            </div>
            <div className="header__menu__item header__menu__right__item">
              <ShoppingCartIcon />
            </div>
            <div className="header__menu__item header__menu__right__item">
              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarAdmin
