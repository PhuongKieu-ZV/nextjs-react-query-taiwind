import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Grid from '../../Grid'

const footerAboutLinks = [
  {
    display: 'About',
    path: '/about',
  },
  {
    display: 'Contact',
    path: '/about',
  },
  {
    display: 'Career',
    path: '/about',
  },
  {
    display: 'News',
    path: '/about',
  },
  {
    display: 'Brand',
    path: '/about',
  },
]

const footerCustomerLinks = [
  {
    display: 'Service',
    path: '/about',
  },
  {
    display: 'Service',
    path: '/about',
  },
  {
    display: 'Service',
    path: '/about',
  },
]

const FooterAdmin: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Lorem Ipsum</div>
            <div className="footer__content">
              <p>
                Lorem Ipsum <strong>0123456789</strong>
              </p>
              <p>
                Lorem Ipsum <strong>0123456789</strong>
              </p>
              <p>
                Lorem Ipsum <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Lorem Ipsum</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link href={'#'}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Lorem Ipsum</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link href={'#'}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link href={'#'}>
                <Image
                  src="/mark.svg"
                  alt="Your Company"
                  width={50}
                  height={50}
                />
              </Link>
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default FooterAdmin
