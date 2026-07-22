import fb from "@/public/facebook.png";
import insta from "@/public/instagram.png";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 rounded-t-3xl bg-gray-100 max-w-[98vw] mx-auto">
      <div className="flex flex-col md:flex-row gap-12 px-12 md:px-24">

        {/* Left: logo, contact, social */}
        <div className="md:basis-1/3 flex flex-col gap-6">
          <Image src={logo} alt="Greenville Learning Collective logo" className="w-[150px]" />
          <div>
            <h3 className="font-bold mb-1">Speech Therapy &amp; Developmental Evaluations</h3>
            <p>Ph: <a href="tel:8644512563">(864) 451-2563</a></p>
            <p>Fax: (864) 670-8017</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Office Location</h3>
            <p>122 Memorial Dr<br />Greer, SC 29650-1517</p>
          </div>
        </div>

        {/* Right: link columns */}
        <div className="flex flex-row flex-wrap gap-12 md:gap-16">

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold mb-1">Services</h3>
            <Link href="/services/speech-language-therapy" className="hover:underline">Speech-Language Therapy</Link>
            <Link href="/services/educational-assessments" className="hover:underline">Educational Assessments</Link>
            <Link href="/pricing" className="hover:underline">Pricing</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold mb-1">Company</h3>
            <Link href="/about-us" className="hover:underline">About Us</Link>
            <Link href="/for-providers" className="hover:underline">For Providers</Link>
            <Link href="/careers" className="hover:underline">Careers</Link>
          </div>

          {/* Stay connected */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold mb-1">Stay connected</h3>
            <ul className="flex gap-5">
              <li>
                <Link href="https://facebook.com/greenvillelearningcollective" target="_blank">
                  <Image src={fb} alt="Link to Greenville Learning Collective's Facebook page" width={24} />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/greenvillelearningcollective" target="_blank">
                  <Image src={insta} alt="Link to Greenville Learning Collective's Instagram page" width={24} />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}