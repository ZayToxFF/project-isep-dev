import Image from "next/image";
import Navbar from "@/components/Navbar";
import Help from "@/components/Help";

export default function Home() {
  return (
    <main className="container flex flex-col gap-5 px-6 md:px-6 pb-24 md:pb-24 pt-5 min-h-screen max-w-[800px] mx-auto text-base">
      <Navbar/>
      <section>

      </section>

      <Help/>

    </main>
  );
}
