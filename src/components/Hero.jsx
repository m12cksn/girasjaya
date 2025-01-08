"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaForward, FaStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, email, desc } = formData;
    setFormData({
      nama: "",
      email: "",
      desc: "",
    });

    // Format pesan WhatsApp
    const whatsappMessage = `Hello, Perkenalkan saya:\n\nNama : ${nama}\nEmail : ${email}\nPesan: ${desc}\n\nSaya tertarik dengan jasa yang anda tawarkan?`;

    const whatsappUrl = `https://wa.me/6287774370779?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulasi loading 2 detik
    return () => clearTimeout(timer);
  }, []);

  const getImages = (start, end) =>
    Array.from({ length: end - start + 1 }).map((_, index) => (
      <div
        key={`image-${index + start}`}
        className="w-32 h-32 lg:w-80 lg:h-80 xl:w-72 xl:h-72 sm:w-[11rem] sm:h-[11rem] bg-white overflow-hidden flex-shrink-0 mx-2 lg:mx-4 xl:mx-2"
      >
        <Image
          src={`/images/marquee/galery${index + start}.webp`}
          alt={`Sample ${index + start}`}
          width={192}
          height={192}
          objectFit="cover"
          className="shadow-lg drop-shadow-md object-cover h-full w-full lg:shadow-none"
        />
      </div>
    ));

  return (
    <div
      id="hero"
      className="flex justify-center items-center mt-20 lg:mt-[5.5rem]"
    >
      {/* Loader */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64 w-full">
          <div className="loader border-t-4 border-blue-900 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row max-w-6xl xl:max-w-7xl 2xl:max-w-full shadow-lg overflow-hidden">
          {/* Left Section: Auto-scrolling Images */}
          <div className="bg-blue-100 flex flex-col lg:justify-evenly gap-4 py-4 lg:py-5 w-full lg:w-1/2 overflow-hidden">
            {/* Marquee 1 */}
            <Marquee speed={20} gradient={false} direction="left">
              {getImages(1, 5)}
            </Marquee>
            {/* Marquee 2 */}
            <Marquee speed={50} gradient={false} direction="left">
              {getImages(6, 10)}
            </Marquee>
            {/* Marquee 3 */}
            <Marquee
              className="hidden"
              speed={50}
              gradient={false}
              direction="right"
            >
              {getImages(11, 15)}
            </Marquee>
          </div>

          {/* Right Section: Text and Form */}
          <div className="w-full py-10 px-5 sm:px-10 bg-gray-100 lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-sm xl:text-base xl:font-bold text-slate-800">
              Spesialisasi Pemasangan Kitchen set & Aluminium
            </h1>
            <h1 className="text-4xl sm:text-[2.5rem] sm:leading-snug font-bold leading-snug mb-4 max-w-md sm:max-w-2xl xl:text-5xl text-slate-950">
              Jasa Pembuatan <span className="text-blue-900"> Kitchen Set</span>{" "}
              dan
              <span className="text-blue-900"> Custom Aluminium </span>
            </h1>
            <p className="text-lg text-gray-600 mb-4 max-w-lg lg:text-3xl xl:text-xl">
              Percayakan Pembuatan{" "}
              <span className="text-blue-900 font-bold"> Kitchen Set </span> dan
              kebutuhan{" "}
              <span className="text-blue-900 font-bold">
                {" "}
                Custom Aluminium{" "}
              </span>{" "}
              anda dengan{" "}
              <span className="font-bold text-lg">Giras Jaya Aluminium</span>
            </p>

            <ul className="bg-blue-100 py-4 px-3 flex flex-col sm:flex-row sm:justify-evenly sm:py-5 gap-5 font-semibold rounded-lg">
              <li className="flex items-center sm:text-lg gap-3 text-slate-900">
                {" "}
                <span className="text-2xl sm:text-3xl text-slate-900 ">
                  <FaStar />
                </span>{" "}
                Quality Work
              </li>
              <li className="flex items-center sm:text-lg gap-3 text-slate-900">
                {" "}
                <span className="text-2xl sm:text-3xl text-slate-900 ">
                  <FaForward />
                </span>{" "}
                Fast Service
              </li>{" "}
              <li className="flex items-center sm:text-lg gap-3 text-slate-900">
                <span className="text-2xl sm:text-3xl text-slate-900 ">
                  <GiMoneyStack />
                </span>{" "}
                Affordable Rates
              </li>
            </ul>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:px-7 sm:py-10 rounded-lg shadow-xl space-y-4 mt-5"
            >
              <h1 className="sm:text-lg max-w-lg sm:leading-normal text-slate-900 xl:text-xl xl:font-bold xl:max-w-3xl">
                Ingin Jasa Konsultasi tanpa ribet ? kirim beberapa informasi
                dasar kepada kami
              </h1>
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="border border-gray-300 bg-white p-3 rounded-lg w-full focus:ring focus:ring-blue-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className="border border-gray-300 p-3 bg-white rounded-lg w-full focus:ring focus:ring-blue-200"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="font-medium text-gray-700">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 bg-white rounded-lg w-full h-32 focus:ring focus:ring-blue-200"
                  placeholder="Describe your project"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-semibold py-5 rounded-lg hover:bg-blue-100 hover:text-blue-900 transition"
              >
                Request a Free Consult
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
