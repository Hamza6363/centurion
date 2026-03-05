import React from 'react'
import Header from '../components/header';
import FooterSection from '../components/footerSection';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterSection />
    </>
  )
}
