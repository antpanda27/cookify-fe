import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
  return (
    <div className="mt-40 text-center justify-items-center p-20 max-lg:px-10 max-md:px-5">
      <div className="max-w-210">
        <h1>Check out @foodieland on Instagram</h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim...
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10 mb-20">
        <Image
          src="/assets/insta/Post1.png"
          alt="insta1"
          className="object-contain"
          width={290}
          height={445}
        />
        <Image
          src="/assets/insta/Post2.png"
          alt="insta1"
          className="object-contain"
          width={290}
          height={445}
        />
        <Image
          src="/assets/insta/Post3.png"
          alt="insta1"
          className="object-contain"
          width={290}
          height={445}
        />
        <Image
          src="/assets/insta/Post4.png"
          alt="insta1"
          className="object-contain"
          width={290}
          height={445}
        />
      </div>
      <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 text-base">
        Vist our Instagram <FaInstagram size={20} />
      </button>
    </div>
  );
};

export default Instagram;
