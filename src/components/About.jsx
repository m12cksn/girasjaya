import Image from "next/image";
import Link from "next/link";

export default function WhatWeDoSection() {
  return (
    <section
      id="produk"
      className="relative  bg-gradient-to-br from-blue-100 to-blue-200 text-slate-900 py-16 px-5 sm:px-7 md:px-10"
    >
      {/* Ornaments */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-lg"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-lg"></div>

      <div className="relative z-10 xl:container mx-auto ">
        {/* Section Title */}
        <div className=" xl:flex xl:pb-10 items-center  ">
          <div className="basis-[50%]   xl:flex flex-col ">
            <h3 className="text-sm font-semibold text-left lg:leading-normal uppercase tracking-wider lg:mb-1">
              Apa yang Kita Buat
            </h3>
            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-bold mb-5">
              Beberapa Layanan Kami
            </h1>
          </div>
          <p className="basis-[50%] text-lg lg:text-xl text-slate-700 max-w-3xl lg:max-w-5xl xl:max-w-xl  mx-auto mb-5 xl:mb-0">
            <span className="font-bold">Giras Jaya Aluminium </span> menawarkan
            pengerjaan Kusen Aluminium, Pintu ACP, Pintu Kaca, Pintu Expanda,
            Kitchen Set Aluminium, Partisi Kaca, Lemari Aluminium, Etalase,
            Kawat Nyamuk Magnet, Raling Tangga Kaca, Pintu dan Jendela Sleding
            dan Skat Kaca Shower
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {/* Card 1 */}
          <div className="bg-white pb-6 xl:px-2 xl:pt-2 text-gray-800  shadow-lg overflow-hidden xl:max-w-sm sm:pb-3 transform hover:scale-105 transition duration-300">
            <Image
              src="/images/bg1.webp" // Replace with your image path
              alt="Kitchen Set"
              width={500}
              height={300}
              className="w-full sm:p-3 aspect-[3/3] object-cover px-4 pt-4"
            />
            <div className="px-4 pt-5 sm:p-3">
              <h2 className="text-xl xl:text-2xl text-slate-900 font-bold mb-2">
                Kitchen Set Aluminium
              </h2>
              <p className="text-sm xl:text-lg  mb-4 text-slate-700">
                Desain modern dan fungsional yang dapat disesuaikan dengan
                kebutuhan dapur Anda.
              </p>
              <div className=" flex justify-center">
                <Link
                  href="/gallery"
                  className="text-blue-500 text-center hover:underline font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white pb-6 xl:px-2 xl:pt-2 text-gray-800  shadow-lg overflow-hidden xl:max-w-sm sm:pb-3 transform hover:scale-105 transition duration-300">
            <Image
              src="/images/kusen.webp" // Replace with your image path
              alt="Kitchen Set"
              width={500}
              height={300}
              className="w-full sm:p-3 aspect-[3/3] object-cover px-4 pt-4"
            />
            <div className="px-4 pt-5 sm:p-3">
              <h2 className="text-xl xl:text-2xl text-slate-900 font-bold mb-2">
                Kusen Aluminium
              </h2>
              <p className="text-sm xl:text-lg mb-4 text-slate-700">
                Desain modern dan fungsional yang dapat disesuaikan dengan
                kebutuhan kusen anda.
              </p>
              <div className=" flex justify-center">
                <Link
                  href="/gallery"
                  className="text-blue-500 text-center hover:underline font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white pb-6 xl:px-2 xl:pt-2 text-gray-800  shadow-lg overflow-hidden xl:max-w-sm sm:pb-3 transform hover:scale-105 transition duration-300">
            <Image
              src="/images/1.webp" // Replace with your image path
              alt="Kitchen Set"
              width={500}
              height={300}
              className="w-full sm:p-3 aspect-[3/3] object-cover px-4 pt-4"
            />
            <div className="px-4 pt-5 sm:p-3">
              <h2 className="text-xl xl:text-2xl text-slate-900 font-bold mb-2">
                Skat Kaca Shower
              </h2>
              <p className="text-sm xl:text-lg mb-4 text-slate-700">
                Desain modern dan fungsional yang dapat disesuaikan dengan
                kebutuhan Pintu Kaca Anda.
              </p>
              <div className=" flex justify-center">
                <Link
                  href="/gallery"
                  className="text-blue-500 text-center hover:underline font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:pt-12 md:pt-10 pt-8 gap-5 justify-center">
        <Link
          href="https://wa.me/6287774370779?text=Hello%0ADengan%20Giras%20Jaya%20Aluminium%20%3F%0ASaya%20tertarik%20ingin%20tahu%20info%20lebih%20detail%20tentang%20produk%20anda.
"
          className="bg-blue-900 py-3 px-8 shadow-md rounded-md text-slate-50 hover:bg-slate-50 hover:text-blue-900 transition-all duration-300 ease-in-out"
        >
          Get Consult
        </Link>
        <Link
          href="/gallery"
          className="bg-slate-50 py-3 px-8 shadow-md rounded-md text-blue-900 hover:bg-blue-900 hover:text-slate-50 transition-all duration-300 ease-in-out"
        >
          See Project
        </Link>
      </div>
    </section>
  );
}
