import { Navigation } from "../components/navigation/navigation";

export default function Contact() {
  return (
    <>
      <Navigation></Navigation>
      <div className="p-12">
        <h1 className="text-3xl md:text-5xl text-center">Referral Information</h1>
        <div className="flex flex-col p-8 max-w-5xl m-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Please send referrals to</h2>
          <ul className="list-disc mb-6 ml-6 text-lg">
            <li>Email: info@greenvillelearningcollective.com</li>
            <li>Fax: 864-670-8017</li>
          </ul>
        </div>
        <div className="flex flex-col p-8  max-w-5xl m-auto" >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Include the following information:</h2>
          <ul className="list-disc mb-6 ml-6 text-lg">
            <li>Patient’s Name</li>
            <li>Patient’s DOB</li>
            <li>Parent Contact Information</li>
            <li>Insurance Plan Information</li>
            <li>Any present diagnoses</li>
            <li>Any relevant medical history</li>
            <li>Reason for referral (Speech-language therapy, Autism Evaluation, etc.)</li>

          </ul>
        </div>
      </div>

    </>


  );
}
