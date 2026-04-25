import Header from "@/components/sections/Header";
import Intro from "@/components/sections/Intro";
import Stack from "@/components/sections/Stack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center px-3 max-w-300 mx-auto">
      <Header />
      <Intro />
      <Stack />
    </main>
  );
}
