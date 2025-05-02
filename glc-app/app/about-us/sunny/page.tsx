import { Button } from "@/app/components/Button";
import { Navigation } from "../../components/navigation/navigation";

import sunny from "@/public/sunny.jpg";
import Image from "next/image";


export default function Sunny() {
  return (
    <>
      <Navigation></Navigation>
      <div className="flex flex-col md:flex-row md:h-screen">
        <div className="image h-[400px] md:h-full md:basis-1/2 p-4">
          <Image src={sunny} alt="Sunny Biggers"
            className="object-cover object-[50%_30%] md:object-center h-full w-full rounded-2xl"></Image>
        </div>

        <div className="content basis-1/2 flex flex-col align-center p-4 md:p-24">
          <h1 className="text-3xl mb-4">Sunny Biggers, credentials</h1>
          <p className="mb-4">Sunny is a licensed psychoeducational specialist & Nationally Certified School Psychologist providing comprehensive evaluations and support.</p>
          <Button
            text="Schedule a Consultation"
            href="#"
            classNames="w-fit "></Button>
        </div>
      </div>


    </>

  );
}
