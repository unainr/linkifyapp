import MainHeader from '@/components/navbar'
import Footer from '@/components/ui/header/footer'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    {/* <Navbar/> */}
    <MainHeader/>
    {children}
    <Footer/>
    </>
  )
}

export default layout