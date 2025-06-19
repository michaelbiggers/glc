import Image from "next/image";
import img from "@/public/demo_1.jpg"
interface DemographicProps {
  id?: string
}
const Demographic = ({ id = '' }: DemographicProps) => {
  return (
    <div className="demographic py-24 lg:py-24  lg:px-24 " id={id}>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="demographic__img-container md:order-1 md:basis-1/3 overflow-hidden md:rounded-2xl">
          <Image src={img} className="object-cover h-full w-full" alt=""></Image>
        </div>
        <div className="demographic__text-container px-12 md:basis-2/3">
          <h4 className="uppercase font-bold mb-2 mt-8">How We Can Help</h4>
          <p className="text-2xl mb-8">We specialize in evaluating and treating a variety of disorders, including the following:</p>
          <div className="lg:columns-2 ">
            <ul className="text-xl list-disc ms-8">
              <li>ADD/ADHD</li>
              <li>Anxiety</li>
              <li>Articulation Disorders</li>
              <li>Autism Spectrum Disorder</li>
              <li>Childhood Apraxia of Speech</li>
              <li>Developmental Language Delay</li>
              <li>Dysarthria</li>
              <li>Executive Functioning Disorders</li>
              <li>Fluency (stuttering/cluttering)</li>
              <li>Language Processing Disorders</li>
              <li>Learning Disabilities</li>
              <li>Phonological/Phonemic Awareness</li>
              <li>Pragmatic Language/Social Skills</li>
              <li>Situational Mutism</li>
            </ul>
          </div>


        </div>

      </div>


    </div>
  );
}
export default Demographic;