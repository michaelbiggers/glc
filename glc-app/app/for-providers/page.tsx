import { Metadata } from "next";
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
export const metadata: Metadata = {
  title: 'Referral Information for Providers | Greenville Learning Collective',
  description:
    'Send referrals to Greenville Learning Collective for evaluations or therapy. View required patient details and contact information for speech-language and developmental services.',
  keywords: [
    'GLC referral',
    'speech therapy referral SC',
    'autism evaluation referral',
    'developmental assessment provider referral',
    'pediatric therapy referrals South Carolina',
    'Greenville therapy intake info',
  ],
  openGraph: {
    title: 'Referral Information for Providers | Greenville Learning Collective',
    description:
      'Information for healthcare providers referring patients to GLC. Includes contact, referral requirements, and service types offered.',
    url: 'https://greenvillelearningcollective.com/for-providers',
    type: 'website',
    images: [
      {
        url: 'https://greenvillelearningcollective.com/public/logo.svg',
        width: 1200,
        height: 630,
        alt: 'GLC logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referral Information for Providers | Greenville Learning Collective',
    description:
      'View referral instructions for developmental and speech-language services at GLC. Serving providers and patients across South Carolina.',
    images: ['https://greenvillelearningcollective.com/public/logo.svg'],
  },
};