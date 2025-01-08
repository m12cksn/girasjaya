import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  const galleryItems = [
    { id: 1, src: "/images/galery1.webp", alt: "Gallery Image 1" },
    { id: 2, src: "/images/galery2.webp", alt: "Gallery Image 2" },
    { id: 3, src: "/images/galery3.webp", alt: "Gallery Image 3" },
    { id: 4, src: "/images/galery4.webp", alt: "Gallery Image 4" },
    { id: 5, src: "/images/galery5.webp", alt: "Gallery Image 5" },
    { id: 6, src: "/images/galery6.webp", alt: "Gallery Image 6" },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-b from-blue-100 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="text-slate-600">Inspirasi dari gallery</h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
            Giras Jaya Aluminium
          </h2>
          <p className="text-lg text-gray-600">
            Lihat beberapa hasil pengerjaan kami yang terbaik untuk memberikan
            Anda inspirasi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group aspect-[3/4] overflow-hidden  shadow-lg"
            >
              {/* Dynamic Image */}
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/30 p-4  shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-center">
                  <Link
                    href="/gallery"
                    className="text-sm text-center font-medium text-blue-100 mt-2 inline-block"
                  >
                    Lihat Lainnya →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex lg:pt-12 md:pt-10 pt-8 gap-5 justify-center">
        <button className="bg-blue-900 py-3 px-8 shadow-md rounded-md text-slate-50 hover:bg-slate-50 hover:text-blue-900 transition-all duration-300 ease-in-out">
          Lihat Full Gallery
        </button>
      </div>
    </section>
  );
}
