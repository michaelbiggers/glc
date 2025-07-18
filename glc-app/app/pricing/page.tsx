import { Navigation } from "../../components/navigation/navigation";
import { Metadata } from "next";
export default function Pricing() {
  return (
    <>
      <Navigation></Navigation>
      <div className="p-12">
        <h1 className="text-3xl md:text-5xl text-center">Pricing & Insurance</h1>
        <div className="flex flex-col p-8 max-w-5xl m-auto" id='pricing'>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing</h2>
          <p>Developmental and psycho-educational evaluations typically range in cost from $500-$2500 based on the age and needs of the individual. Give us a call and we’d be happy to give you a quote based on your or your child’s specific circumstances.</p>
        </div>
        <div className="flex flex-col p-8 max-w-5xl m-auto" id='pricing'>
          <h2 className="text-3xl md:text-5xl  font-bold mb-4">Insurance</h2>
          <h3 className="text-2xl md:text-2xl ">We are currently accepting the following insurance providers for speech-language therapy:</h3>
          <ul className="list-disc mb-6 ml-6 text-lg">
            <li>Medicaid Fee-for-Service</li>
            <li>Select Health/First Choice Medicaid</li>
            <li>Molina Medicaid</li>
            <li>BabyNet</li>
          </ul>
          <h3 className="text-2xl md:text-2xl">We are currently accepting the following insurance providers for Psycho-Educational & Developmental Evaluations:</h3>
          <ul className="list-disc mb-6 ml-6 text-lg">
            <li>Medicaid Fee-for-Service</li>
            <li>Select Health/First Choice Medicaid</li>
            <li>Molina Medicaid</li>
            <li>BabyNet</li>
            <li>First Health Plans</li>
            <li>Healthy Blue Medicaid</li>
          </ul>
          <p className="text-xl mb-4 italic">We also accept self-pay for all services.</p>
        </div>
      </div>

    </>


  );
}
export const metadata: Metadata = {
  title: 'Pricing & Insurance | Greenville Learning Collective',
  description:
    'Explore GLC’s transparent pricing for evaluations and therapy, and view accepted insurance plans including Medicaid, Select Health, Molina, BabyNet, and more.',
  keywords: [
    'GLC pricing',
    'speech therapy cost Greenville SC',
    'autism evaluation pricing',
    'insurance for developmental assessments',
    'Medicaid speech therapy SC',
    'BabyNet evaluations',
    'self-pay therapy South Carolina',
  ],
  openGraph: {
    title: 'Pricing & Insurance | Greenville Learning Collective',
    description:
      'Find detailed pricing for therapy and evaluations, and see which insurance plans are accepted at GLC. We support both Medicaid and self-pay clients.',
    url: 'https://greenvillelearningcollective.com/pricing',
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
    title: 'Pricing & Insurance | Greenville Learning Collective',
    description:
      'GLC accepts multiple Medicaid providers and offers flexible pricing for speech therapy and developmental evaluations. See what works for your family.',
    images: ['https://greenvillelearningcollective.com/public/logo.svg'],
  },
};