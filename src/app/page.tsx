import Note from "@/Components/Note/Note";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex  justify-center items-center flex-col '">
    <h1 className="text-4xl pt-10">Node App </h1>
    <Note /> 
   </main>
  );
}
