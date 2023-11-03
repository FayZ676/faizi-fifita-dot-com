"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "./Stack.css";
import Huggingface from "../../public/logos/huggingface.svg";
import Supabase from "../../public/logos/supabase.svg";
import Figma from "../../public/logos/figma.svg";
import TailwindCSS from "../../public/logos/tailwindcss.svg";
import GoogleCloud from "../../public/logos/googlecloud.svg";
import Docker from "../../public/logos/docker.svg";
import FastAPI from "../../public/logos/fastapi.svg";
import Next from "../../public/logos/next.svg";

export default function Stack() {
  return (
    <div className="logos">
      <div className="logos-slide">
        <Image className="logo" src={Huggingface} alt="Hugging Face Logo" />
        <Image className="logo" src={Supabase} alt="Supabase Logo" />
        <Image className="logo" src={Figma} alt="Figma Logo" />
        <Image className="logo" src={TailwindCSS} alt="TailwindCSS Logo" />
        <Image className="logo" src={GoogleCloud} alt="Google Cloud Logo" />
        <Image className="logo" src={Docker} alt="Docker Logo" />
        <Image className="logo" src={FastAPI} alt="Fast API Logo" />
        <Image className="logo" src={Next} alt="Next Logo" />
      </div>
      <div className="logos-slide">
        <Image className="logo" src={Huggingface} alt="Hugging Face Logo" />
        <Image className="logo" src={Supabase} alt="Supabase Logo" />
        <Image className="logo" src={Figma} alt="Figma Logo" />
        <Image className="logo" src={TailwindCSS} alt="TailwindCSS Logo" />
        <Image className="logo" src={GoogleCloud} alt="Google Cloud Logo" />
        <Image className="logo" src={Docker} alt="Docker Logo" />
        <Image className="logo" src={FastAPI} alt="Fast API Logo" />
        <Image className="logo" src={Next} alt="Next Logo" />
      </div>
    </div>
  );
}
