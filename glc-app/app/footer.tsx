import fb from "@/public/facebook.png";
import insta from "@/public/instagram.png";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-12 rounded-t-3xl bg-gray-100 max-w-[98vw] mx-auto">
      <Image src={logo} alt='Greenville Learning Collective logo' className='w-[150px] mb-1 ml-24'></Image>
      <div className="flex flex-col md:flex-row  content-between">
        <div className="basis-1/3 ps-24 mb-8">
          <h3 className="font-bold mb-1">Speech Therapy & Developmental Evaluations</h3>
          <p>Ph: <a href="tel:8644512563">(864) 451-2563</a></p>
          <p>Fax: (864) 670-8017</p>
        </div>
        <div className="basis-1/3 ps-24 mb-8">
          <h3 className="font-bold mb-1">Office Location</h3>
          <p>122 Memorial Dr<br />
            Greer, SC 29650-1517</p>
        </div>
        <div className="basis-1/3 ps-24 mb-8">
          <h3 className="font-bold mb-1">Social Media</h3>
          <ul className="flex gap-5">
            <li>
              <Link href="https://facebook.com/greenvillelearningcollective" target="_blank">
                <Image src={fb} alt="Link to Greenville Learning Collective's Facebook page" width={24}></Image>
                </Link>
            </li>

            <li>
              <Link href = "https://instagram.com/greenvillelearningcollective" target = "_blank">
                <Image src={insta} alt="Link to Greenville Learning Collective's Instagram page" width={24}></Image>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer >
  )
}