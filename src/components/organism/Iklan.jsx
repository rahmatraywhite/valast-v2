import React from 'react'
import User from '../../assets/images/user-iklan.svg'

const Iklan = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 justify-center my-14'>
        <div>
            <img src={User} alt="Kenapa Harus Valast?" />
        </div>
        <div className='max-w-[595px]'>
            <h1 className='text-3xl md:text-[38px] text-[#1D2939] font-extrabold md:leading-[52px]'>Mengapa Harus Transaksi Menggunakan Valast?</h1>
                <div className='flex flex-col gap-4 mt-14'>
                    <DetailIklan title="Transaksi Mudah Tanpa Batas" text="valast menyediakan dashboard yang akan memberikan tampilan visual dari perkembangan bisnis. Data yang disajikan aktual dan mudah dimengerti oleh pemilik bisnis" no="1" />
                    <DetailIklan title="Transaksi Cepat dan Aman" text="Uang masuk ke rekening hanya dalam hitungan menit" no="2" />
                    <DetailIklan title="Customer Service 24 Jam" text="Ada kendala saat transaksi? Customer Service kami tersedia 24 jam untuk melayani kamu!" no="3" />
                </div>
        </div>
    </div>
  )
}

const DetailIklan = (props) => {
    const { title, text, no } = props
    return (
        <div className='flex gap-6 p-6 border border-[#EAECF0] rounded-xl'>
            <div>
                   <div className='bg-primary w-9 md:w-[48px] h-9 md:h-[48px] flex justify-center rounded-full items-center text-[#fff] text-[22px]'>{no}</div>
            </div>
            <div>
                <p className='text-[#1D2939] text-lg md:text-[28px] font-semibold'>{title}</p>
                <p className='text-[#667085] text-sm md:text-base tracking-[0.032px] leading-6 max-w-[471px] md:mt-4'>{text}</p>
            </div>
        </div>
    )
}

export default Iklan