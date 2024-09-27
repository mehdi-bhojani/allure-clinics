import { useState } from 'react';

const faqs = [
  {
    question: 'Where is Allure Clinic located?',
    answer: 'Allure Clinic is located at 1st Floor, Ittehad Tower 1-C, Main Khayaban-e-Ittehad Road, Corner of Bukhari Commercial Lane 05, DHA Phase 6, Karachi.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment by calling our clinic directly or by filling out the appointment form on our website.'
  },
  {
    question: 'What are the clinic’s operating hours?',
    answer: 'Allure Clinic is open Monday to Saturday from [insert hours]. Please contact us for further details or holiday schedules.'
  },
  {
    question: 'What services do you offer at Allure Clinic?',
    answer: 'We offer a wide range of aesthetic, dermatology, and dental treatments, including hair transplants, PRP, laser treatments, facials, Botox, fillers, and more. Visit our services page for the full list.'
  },
  {
    question: 'Is consultation with a specialist required before treatment?',
    answer: 'Yes, a consultation with our specialist doctors is essential to assess your needs and recommend the best treatment plan.'
  }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='p-5 md:p-12 my-10' id='faq'>
    <h1 className="text-3xl text-primary text-center dark:text-gray-400">Frequently Asked Questions</h1>
    <div className='p-5 md:p-12 my-10 bg-black/50'>
    <div id="accordion-collapse" data-accordion="collapse">
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-white border border-gray-200  hover:text-gray-600 focus:ring-none dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span>{faq.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${
              activeIndex === index ? 'block' : 'hidden'
            } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
          >
            <p className="text-white dark:text-gray-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default FAQAccordion;
