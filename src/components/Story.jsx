import Image from "next/image";

export default function ShortStorySection() {
  return (
    <section
      id="tentang"
      className="relative py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 w-64 h-64 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side - Text */}
        <div className="lg:w-1/2  lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
            Cerita Singkat Kami
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Giras Jawa Aluminium hadir dengan misi memberikan solusi terbaik
            untuk kebutuhan aluminium dan kitchen set Anda. Dengan pengalaman
            bertahun-tahun, kami berkomitmen untuk menghadirkan produk
            berkualitas dan pelayanan profesional yang selalu memuaskan
            pelanggan.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-64 md:h-80 shadow-lg overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d304.96860424348296!2d106.6974213476013!3d-6.321376229719387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-6.321281923463368!2d106.6975065077333!5e1!3m2!1sen!2sid!4v1736235455122!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Giras Jawa Aluminium Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
