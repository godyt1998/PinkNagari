import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: 'What services does PinkcityNagari offer?',
      answer: 'PinkcityNagari offers premium companion services in Jaipur, ensuring discretion and professionalism in all our interactions.'
    },
    {
      question: 'How can I make a booking?',
      answer: 'You can easily make a booking by contacting us through WhatsApp. Click the WhatsApp icon in the navigation bar to start a conversation.'
    },
    {
      question: 'Is my privacy guaranteed?',
      answer: 'Absolutely. We maintain strict confidentiality and ensure complete privacy for all our clients. Your personal information is never shared.'
    },
    {
      question: 'What areas do you serve in Jaipur?',
      answer: 'We provide services across all major areas of Jaipur. You can check our Jaipur menu for specific location details.'
    },
    {
      question: 'What are your operating hours?',
      answer: 'We operate 24/7 to accommodate your schedule. You can contact us at any time for inquiries or bookings.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions about PinkcityNagari
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronUpIcon
                      className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-primary transition-transform duration-200`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;