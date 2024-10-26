import React from 'react'

const Landing = () => {
  return (
    <section className="relative bg-[url('/background.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-10 lg:flex lg:h-screen lg:items-center lg:px-12">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Join with us on a
              <strong className="block font-extrabold text-rose-500">
                {" "}
                Spiritual Journey.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                तिर्थ यात्रा: आस्थाको मार्गदर्शनमा गरिएको पवित्र यात्रा, जहाँ मन शान्ति र आत्मशुद्धि प्राप्त गर्छ।
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                ✆ Book A Call
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                🗓️ View Schedule 
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Landing
