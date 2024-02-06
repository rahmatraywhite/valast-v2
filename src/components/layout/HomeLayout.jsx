import React, { Fragment } from 'react'
import Navbar from '../organism/Navbar'
import Header from '../organism/Header'
import Rated from '../organism/Rated'
import Colab from '../organism/Colab'

const HomeLayout = () => {
  return (
    <Fragment>
        <Navbar />
        <div className='mx-auto flex flex-col justify-center'>
            <Header />
            <Rated />
            <Colab />
        </div>
    </Fragment>
  )
}

export default HomeLayout