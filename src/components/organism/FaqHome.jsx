import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../utils/LanguageContext';

const FaqHome = () => {
  const { t } = useContext(LanguageContext);
  const [faqs, setFaqs] = useState([
    {
      question: t('Apa itu Valast?'),
      answer: t(
        'Valast merupakan platform Money Changer yang memberikan kemudahan dalam mengelola transaksi dengan cepat dan mudah.'
      ),
    },
    {
      question: t('Saya tertarik menggunakan Valast, bagaimana caranya?'),
      answer: t(
        'Anda bisa mencoba menggunakan Valast dengan menekan tombol “Coba Gratis” dan dapatkan kemudahan melayani nasabah dalam transaksi penukaran valuta asing.'
      ),
    },
    {
      question: t('Bagaimana cara melakukan pembayaran di Valast?'),
      answer: t(
        'Platform Valast menyediakan 3 metode pembayaran. Mulai dari tunai, transfer antar bank, hingga pembayaran  kombinasi tunai dan transfer.'
      ),
    },
    {
      question: t(
        'Jika terjadi kendala saat transaksi, apa yang perlu saya lakukan?'
      ),
      answer: t(
        'Valast menyediakan layanan Customer Care yang bersedia membantu Anda selama 24 jam. Hubungi kami segera jika terjadi kendala saat transaksi.'
      ),
    },
    {
      question: t('Bagaimana cara berlangganan Valast?'),
      answer:
        t('Ada beberapa cara berlangganan yang bisa Anda pilih') +
        t('list Pertanyaan'),
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
    setFaqs(updatedFaqs);
  };

  return (
    <div
      id="faq"
      className="container max-w-5xl my-[60px] px-2 md:px-0 mx-auto">
      <h1 className="text-[38px] font-extrabold leading-[52px] text-[#1D2939] text-center mb-[42px]">
        {t('Punya Pertanyaan Seputar Valast?')}
      </h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4"
          onClick={() => toggleFAQ(index)}
          style={{ cursor: 'pointer' }}>
          <div className="flex justify-between items-center border border-[##EAECF0] p-8 rounded-[16px]">
            <h2 className="text-lg text-[#1D2939] font-semibold">
              {faq.question}
            </h2>
            <span className="">{faq.isOpen ? '-' : '+'}</span>
          </div>
          {faq.isOpen && (
            <p className="mt-2 bg-slate-200 rounded-md py-2 px-7">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqHome;
