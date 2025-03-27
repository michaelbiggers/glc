
interface CalloutProps {
  text: string;
}
const Callout: React.FC<CalloutProps> = ({ text }) => {
  return (
    <div className="callout py-12 lg:py-36 px-12 lg:px-48 bg-blue-50">
      <div className="callout__text-container text-center">
        <h2 className="text-4xl font-bold">Comprehensive Evaluations & Therapy for Autism, ADHD, Speech, Language, and Learning Challenges</h2>
        <p className="text-xl mt-8">At Greenville Learning Collective (GLC), we believe every individual deserves the right support to communicate, learn, and thrive. Whether you or your child is navigating autism, ADHD, speech and language difficulties, or other learning challenges, we’re here to help with expert evaluations and personalized therapy.</p>
      </div>

    </div>
  );
}
export default Callout;