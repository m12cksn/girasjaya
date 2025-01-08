import React from "react";

export default function Marquee() {
  return (
    
      {/* Left Section: Auto-scrolling Images */}
      <div className="bg-blue-100 flex flex-col lg:justify-evenly gap-4 pt-4 lg:py-5 w-full lg:w-1/2 overflow-hidden">
        <Marquee speed={20} gradient={false} direction="left">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`image-${index}`}
              className="w-32 h-32 lg:w-80 lg:h-80 xl:w-72 xl:h-72 sm:w-[11rem] sm:h-[11rem] bg-white  overflow-hidden flex-shrink-0 mx-2 lg:mx-4 xl:mx-2"
            >
              <Image
                src={`/images/sample${(index % 5) + 1}.jpg`}
                alt={`Sample ${index + 1}`}
                width={192}
                height={192}
                objectFit="cover"
                className="shadow-lg drop-shadow-md  lg:shadow-none"
              />
            </div>
          ))}
        </Marquee>

        <Marquee speed={50} gradient={false} direction="left">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`image-${index}`}
              className="w-32 h-32 lg:w-80 lg:h-80 xl:w-72 xl:h-72 sm:w-[11rem] sm:h-[11rem] bg-white  overflow-hidden flex-shrink-0 mx-2 lg:mx-4 xl:mx-2"
            >
              <Image
                src={`/images/sample${(index % 5) + 1}.jpg`}
                alt={`Sample ${index + 1}`}
                width={192}
                height={192}
                objectFit="cover"
                className="shadow-lg lg:shadow-none drop-shadow-md"
              />
            </div>
          ))}
        </Marquee>
        <Marquee speed={50} gradient={false} direction="right">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`image-${index}`}
              className="w-32 h-32 lg:w-80 lg:h-80 xl:w-72 xl:h-72 sm:w-[11rem] hidden lg:flex sm:h-[11rem] bg-white  overflow-hidden flex-shrink-0 mx-2 lg:mx-4 xl:mx-2"
            >
              <Image
                src={`/images/sample${(index % 5) + 1}.jpg`}
                alt={`Sample ${index + 1}`}
                width={192}
                height={192}
                objectFit="cover"
                className="shadow-lg lg:shadow-none drop-shadow-md"
              />
            </div>
          ))}
        </Marquee>
      </div>
    
  );
}
