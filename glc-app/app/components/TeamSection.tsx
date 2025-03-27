import styles from './TeamSection.module.css';
interface TeamProps {
  text?: string;
}
const TeamSection: React.FC<TeamProps> = ({ text }) => {
  return (
    <div className="team flex flex-wrap lg:flex-nowrap gap-12 lg:px-24 lg:py-24 ">
      {/* Team heading */}
      <div className="team__item  lg:order-1 h-xl lg:h-[600] bg-[#39747f] flex justify-center items-center lg:rounded-2xl basis-full lg:basis-1/3 flex-1">
        <h2 className="text-7xl font-bold text-white p-12">Meet Our Team</h2>
      </div>
      {/* Team member: Sunny */}
      <div className={`${styles.team__item} lg:order-0 h-[600] rounded-2xl overflow-hidden relative flex basis-full md:basis-1/2 lg:basis-1/3 mx-12 md:mx-0 lg:flex-1`} style={{ backgroundImage: 'url(/sunny.jpg)' }}>
        <div className={`${styles.team__item_overlay} bg-[#f2ae21]`}></div>
        <div className={styles.team__item_container}>
          <h4 className={`${styles.team__item_title} text-xl bg-[#f2ae21]`}>Sunny Biggers - School Psychologist</h4>
        </div>
      </div>

      {/* Team member: Jacie */}
      <div className={`${styles.team__item} lg:order-2 h-[600] rounded-2xl overflow-hidden relative flex basis-full md:basis-1/2 lg:basis-1/3 mx-12 md:mx-0 lg:flex-1`} style={{ backgroundImage: 'url(/jacie.jpg)' }}>
        <div className={`${styles.team__item_overlay} bg-[#d14d22]`}></div>
        <div className={styles.team__item_container}>
          <h4 className={`${styles.team__item_title} text-xl bg-[#d14d22]`}>Jacie Curry - CCC-SLP</h4>
        </div>
      </div>
    </div>
  );
}
export default TeamSection;