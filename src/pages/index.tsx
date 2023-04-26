import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main
      className={`min-h-screen flex bg-[#D6FD24] items-center justify-center p-10`}
    >
      <img src="/main.svg" />

      <img
        className="absolute bottom-6 left-0 right-0 mx-auto w-32"
        src="/logo.png"
      />
    </main>
  );
}
