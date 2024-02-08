import React, { useEffect, useState } from 'react';


const FaqHome = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'Mengapa menukar valuta asing dengan Valast lebih cepat dan biaya lebih murah?',
            answer: 'Mengapa menukar valuta asing dengan Valast lebih cepat dan biaya lebih murah?',
        },
        {
            question: 'Bagaimana jika transaksi gagal?',
            answer: 'Anda dapat dengan mudah mengikuti perkembangan proyek dengan menjelajahi bagian Proyek-Proyek di situs kami. Di sana, Anda akan menemukan informasi rinci, pembaruan terbaru, dan visualisasi kemajuan setiap proyek.',
        },
        {
            question: 'Bagaimana cara Money Changer bergabung sebagai merchant Valast?',
            answer: 'Bagaimana cara Money Changer bergabung sebagai merchant Valast?',
        },
        {
            question: 'Apa yang harus dilakukan ketika ada pertanyaan dan kendala saat transaksi?',
            answer: 'Apa yang harus dilakukan ketika ada pertanyaan dan kendala saat transaksi?',
        },
        {
            question: 'Bagaimana cara refund ketika terjadi kegagalan saat transaksi?',
            answer: 'Bagaimana cara refund ketika terjadi kegagalan saat transaksi?',
        },
    ]);

    const toggleFAQ = (index) => {
        const updatedFaqs = [...faqs];
        updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
        setFaqs(updatedFaqs);
    };


    return (
        <div className="container max-w-5xl my-[60px] px-2 md:px-0 mx-auto"  >
            <h1 className="text-[38px] font-extrabold leading-[52px] text-[#1D2939] text-center mb-[42px]">Punya Pertanyaan Seputar Valast?</h1>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="mb-4"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flex justify-between items-center border border-[##EAECF0] p-8 rounded-[16px]">
                        <h2 className="text-lg text-[#1D2939] font-semibold">{faq.question}</h2>
                        <span className=''>{faq.isOpen ? '-' : '+'}</span>
                    </div>
                    {faq.isOpen && <p className="mt-2 bg-slate-200 rounded-md py-2 px-7">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
};


export default FaqHome;
