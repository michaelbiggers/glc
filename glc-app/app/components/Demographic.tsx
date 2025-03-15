const Demographic = () => {
  return (
    <div className="demographic py-36 px-24 ">
      <div className="flex flex-wrap md:flex-nowrap">
      <div className="demographic__img-container md:order-1 md:basis-1/3 overflow-hidden rounded-2xl">
          <img className="object-cover h-full w-full" src="/demo_1.jpg" alt="" />
        </div>
        <div className="demographic__text-container md:basis-2/3">
          <h4 className="uppercase font-bold mb-2 mt-8">How We Can Help</h4>
          <p className="text-2xl mb-8">We specialize in evaluating and treating a variety of disorders, including the following:</p>
          <div className="lg:columns-2 ">
            <ul className="text-xl">
              <li>ADD/ADHD</li>
              <li>Anxiety</li>
              <li>Articulation Disorders</li>
              <li>Autism Spectrum Disorder</li>
              <li>Augmentative-Alternative Communication</li>
              <li>Childhood Apraxia of Speech</li>
              <li>Developmental Disorders</li>
              <li>Developmental Language Delay</li>
              <li>Dysarthria</li>
              <li>Executive Functioning Disorders</li>
              <li>Fluency (stuttering/cluttering)</li>
              <li>Free Consultation</li>
              <li>Individual/Group Speech Therapy</li>
              <li>Language Processing Disorders</li>
              <li>Learning Disabilities</li>
              <li>Parent/Caregiver Coaching</li>
              <li>Phonological Speech Disorders</li>
              <li>Phonological/Phonemic Awareness</li>
              <li>Pragmatic Language/Social Skills</li>
              <li>Psychoeducational Evaluations</li>
              <li>Screenings</li>
              <li>Situational Mutism</li>
              <li>Speech-Language Evaluations</li>
              <li>Traumatic Brain Injury</li>
              <li>Tutoring</li>
            </ul>
          </div>


        </div>
        
      </div>


    </div>
  );
}
export default Demographic;