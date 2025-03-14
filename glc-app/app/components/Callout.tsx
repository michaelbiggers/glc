
interface CalloutProps {
  text: string;
}
const Callout: React.FC<CalloutProps> = ({ text }) => {
  return (
    <div className="callout py-36 px-48 bg-blue-50">
      <div className="callout__text-container text-center">
        <p className="text-3xl">{text}</p>
      </div>

    </div>
  );
}
export default Callout;