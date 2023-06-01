import React from 'react';

const Contact = () => {
  return (<>
    <div className="flex place-content-around " id='Cont-box'>
      <div class="grid grid-cols-1 gap-4  flex-wrap w-64 h-80 mt-96 ml-72" id='grid-contact'>
        <div className="p-8 rounded-3xl shadow-lg bg-stone-800 text-white text-center"id='email'>
          <a href='anastasia.falk77@gmail.com'><h2 className="font-semibold mt-2.5">Email</h2></a>
          
          <p className="-mb-10">Send a message</p>
        </div>

        <div className="p-8 rounded-3xl shadow-lg bg-stone-800 text-white text-center"id='whatsup'>
          <h2 className="font-semibold mt-2.5">WhatsApp</h2>
          <p className="-mb-10">Send a message</p>
        </div>
      </div>

      <section class="bg-white dark:bg-gray-900 w-4/6"id='form'>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-2/4">
          <h2 className="mb-4 text-xl tracking-tight font-extrabold text-left text-rose-500">Get in touch</h2>
          <p className="mb-8 lg:mb-16 text-left text-rose-500 text-7xl"id='cont'>Don’t be a < br></br>stranger! <br></br>
            Say hi!</p>
          <form action="#" className="space-y-8">

            <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required />
            </div>

            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a message"></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
        </div>
      </section>

    </div>

  </>);
}
export default Contact;