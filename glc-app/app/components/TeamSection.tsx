import styles from './TeamSection.module.css';
interface TeamProps {
  text?: string;
}
const TeamSection: React.FC<TeamProps> = ({ text }) => {
  return (
    <div className="team columns-3 gap-12 px-24 py-24">
      {/* Team member: hover #f2ae21 */}
      <div className={`${styles.team__item} h-[600] rounded-2xl overflow-hidden relative flex`} style={{ backgroundImage: 'url(/sunny.jpg)' }}>
        <div className={`${styles.team__item_overlay} bg-[#f2ae21]`}></div>
        <div className={styles.team__item_container}>
          <p className={`${styles.team__item_title} text-xl bg-[#f2ae21]`}>Sunny Biggers - School Psychologist</p>
        </div>
      </div>
      {/* Team member description */}
      <div className="team__item h-[600] bg-[#39747f] flex justify-center items-center rounded-2xl">
        <h2 className="text-7xl font-bold text-white p-12">Meet Our Team</h2>
      </div>

      {/* Team member */}
      <div className={`${styles.team__item} h-[600] rounded-2xl overflow-hidden relative flex`} style={{ backgroundImage: 'url(/jacie.jpg)' }}>
        <div className={`${styles.team__item_overlay} bg-[#d14d22]`}></div>
        <div className={styles.team__item_container}>
          <p className={`${styles.team__item_title} text-xl bg-[#d14d22]`}>Jacie Curry - CCC-SLP</p>
        </div>
      </div>
    </div>
  );
}
export default TeamSection;