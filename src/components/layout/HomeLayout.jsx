import React, { Fragment } from 'react'
import Navbar from '../organism/Navbar'
import Header from '../organism/Header'
import Rated from '../organism/Rated'
import Colab from '../organism/Colab'
import TabSwitch from '../organism/TabSwitch'
import Iklan from '../organism/Iklan'
import Testimonial from '../organism/Testimonial'

const HomeLayout = () => {
  return (
    <Fragment>
        <Navbar />
        <div className='mx-auto flex flex-col justify-center'>
            <Header />
            <Rated />
            <Colab />
            <TabSwitch />
            <Iklan />
            <Testimonial />
        </div>
    </Fragment>
  )
}

export default HomeLayout