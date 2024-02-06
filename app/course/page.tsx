import Image from "next/image";
import Navbar from "@/components/Navbar";
import Help from "@/components/Help";
import Link from "next/link";

const CourseLink = ({ href, bgColor, hoverColor, text }:any) => (
  <Link href={href} legacyBehavior>
    <a className={`flex flex-col items-center justify-center w-full h-28 duration-1000 bg-[${bgColor}] hover:bg-[${hoverColor}] rounded-xl`}>
      {text}
    </a>
  </Link>
);

export default function Course() {
  return (
    
      <main className="container flex flex-col gap-5 px-6 md:px-6 pb-24 md:pb-24 pt-5 min-h-screen max-w-[800px] mx-auto text-base">
        <Navbar />
        <section className="flex flex-col items-center justify-center mt-24 mb-12 pb-12 border-b-2 border-gray-400">
          <h1 className="text-4xl">Course</h1>
        </section>
        <section className="grid grid-cols-3 gap-2">
          <CourseLink href="" bgColor="red-400" hoverColor="red-400" text="Html" />
          <CourseLink href="" bgColor="#151b25" hoverColor="#264de4" text="Css" />
          <CourseLink href="" bgColor="#151b25" hoverColor="#f7df1e" text="Javascript" />
          <CourseLink href="course/php" bgColor="#151b25" hoverColor="#8892bf" text="Php" />
          <CourseLink href="" bgColor="#151b25" hoverColor="#44a8b3" text="Tailwind" />
        </section>
        <Help />
      </main>
  );
}
