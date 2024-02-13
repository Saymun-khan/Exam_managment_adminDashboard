import React from 'react'
import Footer from '../ecommerce/pages/Footer'
import BestSeller from './pages/BestSeller'
import Card from './pages/Card'
import Home from './pages/Home'
import Image from './pages/Image'
import Navbar from './pages/Navbar'
import News from './pages/News'
import Section from './pages/Section'
import TopCatagories from './pages/TopCatagories'
const Ecommerce = () => {
  return (
    <div className='p-8 justify-center ml-24'>
        <Navbar />
        <Home />
        <div className='flex'>
           <Card />
           <Card />
           <Card />
        </div>
        <div  className='mt-24'>
            <h1 className='text-2xl font-semibold text-center mb-10'>Top Catagories</h1>
            <div className='flex'>
               <TopCatagories />
               <TopCatagories />
               <TopCatagories />
            </div>
        </div>
        <div>
            <Section />
        </div>
        <div  className='mt-24'>
            <h1 className='text-2xl font-semibold text-center mb-10'>BEST SELLER</h1>
            <div className='flex'>
               <BestSeller />
               <BestSeller />
               <BestSeller />
            </div>
            <div className='flex mt-10'>
               <BestSeller />
               <BestSeller />
               <BestSeller />
            </div>
        </div>
        <div className='mt-24'>
        <h1 className='text-3xl font-semibold text-center mb-10'> OUR NEWS</h1>
        <div className='grid grid-cols-3'>
            <News />
            <News />
            <News />
        </div>
        </div>
        <div className='grid grid-cols-5'>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
        </div>
        <div className='bg-slate-900 mt-6'>
            <Footer />
        </div>
    </div>
  )
}

export default Ecommerce