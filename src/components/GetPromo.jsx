import Link from "next/link";

export default function GetPromo() {
  const whatsappText =
    "https://wa.me/6287774370779?text=Hello%0ADengan%20Giras%20Jaya%20Aluminium%20%3F%0ASaya%20tertarik%20ingin%20tahu%20info%20lebih%20detail%20tentang%20produk%20anda";
  return (
    <section>
      {/* BG 1 */}
      <div
        className="relative parallax-bg bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg1.webp')" }}
      >
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Konten */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end h-full px-6 py-16 sm:py-20 lg:px-24 xl:px-40 ">
          {/* Card */}
          <div className="backdrop-blur-md bg-white/30 relative rounded-lg shadow-lg px-5 py-10  max-w-lg sm:max-w-xl md:max-w-3xl">
            <button className="absolute top-5 right-5">Logo</button>
            <h4 className="text-slate-200">Ubah dapurmu</h4>
            <h1 className="text-4xl font-bold text-slate-100  mb-4 leading-snug">
              Segera Miliki Dapur Impian
            </h1>
            <p className="text-lg text-slate-200 mb-6 text-justify">
              Percayakan Giras Jaya Aluminium untuk mewujudkan dapur impian
              anda. dari konsultasi dan layanan desain hingga pemasangan yang
              presisi, anda dapat mengandalkan kami untuk memberikan
              transformasi sempurna dapur impian anda.
            </p>
            <Link
              href={whatsappText}
              className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Konsultasikan dengan Kami
            </Link>
          </div>
        </div>
      </div>
      <div
        className="relative  bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg2.webp')" }}
      >
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Konten */}
        <div className="relative lg:px-24 xl:px-40 z-10 flex items-center justify-center lg:justify-start h-full px-6 py-20  ">
          {/* Card */}
          <div className="backdrop-blur-md bg-white/30 relative rounded-lg shadow-lg px-5 py-10  max-w-lg sm:max-w-xl md:max-w-3xl ">
            <button className="absolute top-5 right-5">Logo</button>
            <h4 className="text-slate-200">Custom Aluminium</h4>
            <h1 className="text-4xl font-bold text-slate-100  mb-4 leading-snug">
              Jasa Kusen Aluminium
            </h1>
            <p className="text-lg text-slate-200 mb-6 text-justify">
              Percayakan Giras Jaya Aluminium untuk pengerjaan kebutuhan
              aluminium anda, Kusen Aluminium, Pintu ACP, Pintu Kaca, Pintu
              Expanda, Kitchen Set Aluminium, Partisi Kaca, Lemari Aluminium,
              Etalase, Kawat Nyamuk Magnet
            </p>
            <Link
              href={whatsappText}
              className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Konsultasikan dengan Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
