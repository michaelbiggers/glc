import TeamCard from './TeamCard';

const TeamSection = () => {
  return (
    <div className="team flex flex-wrap lg:flex-nowrap gap-12 lg:px-24 lg:py-24">
      {/* Team heading */}
      <div className="team__item  lg:order-1 h-xl lg:h-[600] bg-[#39747f] flex justify-center items-center lg:rounded-2xl basis-full lg:basis-1/3 flex-1 ">
        <h2 className="text-4xl md:text-7xl font-bold text-white p-12">Meet Our Team</h2>
      </div>
      {/* Team member: Sunny */}
      <TeamCard
        href="/about-us/sunny"
        name={{ first_name: "Sunny", last_name: "Biggers" }}
        title="School Psychologist"
        photo='/sunny.jpg'
        classNames='lg:order-0'
      >
        <ul className='mb-4 ml-8 list-disc text-white'>
          <li>Autism spectrum disorder</li>
          <li>Dyslexia and discalcula</li>
          <li>Learning assessments</li>
        </ul>
      </TeamCard>
      {/* Team member: Jacie */}
      <TeamCard
        href="/about-us/jacie"
        name={{ first_name: "Jacie", last_name: "Curry" }}
        title="CCC-SLP"
        photo='/jacie.jpg'
        classNames='lg:order-2'
      >
        <ul className='mb-4 ml-8 list-disc text-white'>
          <li>Speech sound disorders</li>
          <li>Fluency</li>
          <li>Social communication</li>
        </ul>
      </TeamCard>
    </div>
  );
}
export default TeamSection;