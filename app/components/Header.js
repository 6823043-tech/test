"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className={"W-full h-[200px] bg-green-300 "}>
      <h1 className="text-5xl w-full text-center bg-gray pt-24">Mini Market</h1>
      <button
        className="w-[30px] h-[15px] bg-gray "
        aria-label="Toggle menu"
        onClick={() => setOpen((s) => !s)}
      ></button>
    </div>
  );
}
