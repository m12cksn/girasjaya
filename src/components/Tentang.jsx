import React from "react";
import Link from "next/link";

export default function Tentang() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-100 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className=" mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
            Spesialis Kitchen Set Aluminium & Kaca
          </h2>
          <p className="text-lg text-gray-600">
            Kami percaya bahwa estetis dan durabilitas adalah investasi terbaik
            bangunan. Dengan pengalaman sejak 2010, kami berkomitmen untuk
            memberikan produk berkualitas tinggi dengan pengerjaan presisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Produk Kaca
            </h3>
            <ul className="space-y-2">
              <li className="text-slate-900 font-semibold text-lg">
                Produk Kaca
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Curtain Wall
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Partisi Kaca
                <ul className="pl-4 space-y-1 text-gray-600">
                  <li className="text-base">1. Partisi Ruangan</li>
                </ul>
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Pintu Kaca
                <ul className="pl-4 space-y-1 text-gray-600">
                  <li className="text-base">1. Pintu Kaca Lipat</li>
                  <li className="text-base">2. Pintu Kaca Geser</li>
                  <li className="text-base">3. Pintu Kaca Dorong</li>
                  <li className="text-base">4. Pintu Kaca Frameless</li>
                  <li className="text-base">5. Pintu Kaca Semi Frameless</li>
                  <li className="text-base">6. Pintu Kamar Mandi</li>
                </ul>
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Railing Tangga
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Produk Aluminium
            </h3>
            <ul className="space-y-2">
              <li className="text-slate-900 font-semibold text-lg">
                Pintu Aluminium
                <ul className="pl-4 space-y-1 text-gray-600">
                  <li className="text-base">1. Pintu Panel ACP</li>
                  <li className="text-base">2. Pintu Aluminium Spandril</li>
                  <li className="text-base">3. Pintu Kamar Mandi</li>
                  <li className="text-base">4. Pintu Lipat Aluminium</li>
                  <li className="text-base">5. Pintu Aluminium Ayun</li>
                  <li className="text-base">6. Pintu Aluminium Geser</li>
                  <li className="text-base">7. Pintu Geser Lipat Aluminium</li>
                </ul>
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Jendela Aluminium
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Partisi Aluminium
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Kusen Aluminium
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Jalusi Aluminium
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Jasa Perbaikan
            </h3>
            <ul className="space-y-2">
              <li className="text-slate-900 font-semibold text-lg">Home</li>
              <li className="text-slate-900 font-semibold text-lg">
                Service Pintu Turun
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Pintu Menutup Terlalu Cepat
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Service Pintu Sliding Aluminium
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Penggantian Kaca Pecah
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Produk & Jasa ACP
            </h3>
            <ul className="space-y-2">
              <li className="text-slate-900 font-semibold text-lg">
                Pasang ACP Semua Merk
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Dinding Bangunan
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Kitchen Set ACP
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Partisi ACP Seven
              </li>
              <li className="text-slate-900 font-semibold text-lg">
                Kolom Tiang Bangunan
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex lg:pt-12 md:pt-10 pt-8 gap-5 justify-center">
        <Link
          href="/gallery"
          className="hover:bg-slate-50 py-3 px-8 shadow-md rounded-md hover:text-blue-900 bg-blue-900 text-slate-50 transition-all duration-300 ease-in-out"
        >
          Portfolio Giras Jaya Aluminium
        </Link>
      </div>
    </section>
  );
}
