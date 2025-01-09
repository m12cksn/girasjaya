import Link from "next/link";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Brand Info */}
          <div>
            <Image
              src="/images/logofooter.webp"
              alt={`Sample2`}
              width={192}
              height={192}
              objectFit="cover"
              className="mb-3"
            />
            <p className="text-gray-200">
              Solusi terbaik untuk kebutuhan aluminium dan kitchen set Anda.
              Kami siap memberikan produk berkualitas tinggi dengan pelayanan
              profesional.
            </p>
          </div>

          {/* Column 2 - Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="hover:text-gray-300 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#produk" className="hover:text-gray-300 transition">
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-gray-300 transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#tentang"
                  className="hover:text-gray-300 transition"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <p className="text-gray-200 mb-2">
              Jl. Waru Rt02/06 Ciater,Serpong - Tangerang Selatan
            </p>
            <p className="text-gray-200 mb-2">
              Email: sultanmalikalrashid@gmail.com
            </p>
            <p className="text-gray-200">Instagram : Bsnjar313</p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="my-8 border-t border-gray-500"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Giras Jaya Aluminium. Semua Hak
            Dilindungi.
          </p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#privacy" className="hover:text-gray-100 transition">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-gray-100 transition">
                Syarat & Ketentuan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
