import React from 'react'
import Colab1 from '../../assets/images/colab1.png'
import Colab2 from '../../assets/images/colab2.png'
import Colab3 from '../../assets/images/colab3.png'
import Colab4 from '../../assets/images/colab4.png'
import Colab5 from '../../assets/images/colab5.png'
import Sertif1 from '../../assets/icons/sertif1.svg'
import Sertif2 from '../../assets/icons/sertif2.svg'
import Sertif3 from '../../assets/icons/sertif3.svg'
import { CardHome } from '../atoms/CardHome'

const Colab = () => {
    const collabImages = [Colab1, Colab2, Colab3, Colab4, Colab5];

    return (
        <div className='my-[30px]'>
            <p className='text-lg text-[#475467] text-center font-medium leading-6'>Telah Berkolaborasi dengan:</p>
            <div className="flex justify-center items-center mt-8 space-x-[81px]">
                {collabImages.map((image, index) => (
                    <img key={index} src={image} alt={`Colab ${index + 1}`} className="w-32 h-32" />
                ))}
            </div>
            <div className='flex justify-center gap-6 my-[30px]'>
                <CardHome title="Diawasi Oleh Bank Indonesia" text="Valast telah terdaftar dan diawasi oleh Bank Indonesia" img={Sertif1} />
                <CardHome title="Sertifikasi ISO 27001:2013" text="Keamanan dan kerahasiaan data terjamin dengan sertifikasi ISO" img={Sertif2} />
                <CardHome title="Terdaftar PSE Kominfo" text="Terdaftar sebagai sistem elektronik yang aman untuk bertransaksi" img={Sertif3} />
            </div>
        </div>
    )
}

export default Colab
