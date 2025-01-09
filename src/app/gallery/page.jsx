"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import GetPromo from "@/components/GetPromo";

const Gallery = () => {
  const imagesPerPage = 12; // Jumlah gambar per halaman
  const [images, setImages] = useState([]); // Semua data gambar
  const [filteredImages, setFilteredImages] = useState([]); // Data gambar yang difilter
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true); // Status loading
  const [selectedCategory, setSelectedCategory] = useState("All"); // Kategori yang dipilih

  useEffect(() => {
    // Fetch data dari JSON lokal
    const fetchImages = async () => {
      try {
        const res = await fetch("/data/galeri.json");
        if (!res.ok) throw new Error("Failed to fetch JSON");
        const data = await res.json();
        console.log("Fetched Data:", data); // Debug
        setImages(data);
        setFilteredImages(data); // Awalnya semua gambar ditampilkan
        setTotalPages(Math.ceil(data.length / imagesPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Selesai loading
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    // Filter gambar berdasarkan kategori
    const filtered =
      selectedCategory === "All"
        ? images
        : images.filter((image) => image.category === selectedCategory);

    setFilteredImages(filtered);
    setCurrentPage(1); // Reset ke halaman pertama
    setTotalPages(Math.ceil(filtered.length / imagesPerPage));
  }, [selectedCategory, images]);

  // Gambar untuk halaman saat ini
  const currentImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const changePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setLoading(true); // Tampilkan loading saat pindah halaman
      setTimeout(() => {
        setCurrentPage(page);
        setLoading(false);
      }, 500); // Simulasikan delay loading
      window.scrollTo({
        top: 0, // Posisi atas halaman
        behavior: "smooth", // Gulir halus
      });
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-blue-100 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto pt-10 pb-10 px-4">
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

        {/* Kategori Button */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {[
            "All",
            "Kitchen Set",
            "Kusen Aluminium",
            "Partisi Kaca",
            "Pintu",
            "Curtain Wall",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg shadow-md ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Gambar */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: imagesPerPage }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg overflow-hidden animate-pulse aspect-square"
                ></div>
              ))
            : currentImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    objectFit="cover"
                    className="object-cover h-full w-full"
                  />
                  <div className="p-4">
                    <p className="text-gray-700 font-medium text-center">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 flex-wrap gap-3">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg shadow ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index + 1)}
              className={`px-4 py-2 mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-700 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              } rounded-lg shadow`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg shadow ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <GetPromo />
    </div>
  );
};

export default Gallery;
