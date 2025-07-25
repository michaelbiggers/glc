import Faq from "./Faq";
import Link from "next/link";
const Faqs = () => {
  return (
    <div className="faqs flex flex-wrap py-24 lg:py-36  lg:px-24" >
      <div className="faqs__col basis-full lg:basis-1/3 px-12 lg:px-0">
        <h2 className="text-4xl md:text-7xl">Frequently Asked Questions</h2>
      </div>
      <div className="faqs__col basis-full lg:basis-2/3">
        <Faq
          title="What is the process to get started? What can I expect?"
          content="Our process typically begins with a free phone or virtual consultation. This appointment can be booked online, Just click the Request Appointment button to see current availability. You can also give us a call at 864-451-2563. From there, we will guide you through the next steps. Typically, intake paperwork is completed through our patient portal. You will schedule one or two evaluation appointments to meet with our clinicians in-office. Expect to be at the evaluation appointment for 1-2 hours." />
        <Faq
          title="Do you accept insurance?">
          We accept a range of insurance providers, as well as self-pay options. Please check our <Link href='/pricing' style={{ textDecoration: 'underline' }}>insurance page</Link> for an up-to-date list of providers.
        </Faq>
        <Faq
          title="How long will it take to get an appointment? "
          content="We can typically schedule a consultation right away. Wait times vary depending on what type of evaluation is needed." />
        <Faq
          title="Do I need a doctor’s referral? "
          content="Yes. If you are seeking an evaluation or therapy using any form of insurance a physician's referral is needed. A prior authorization for service may also be required. If you are a private-pay client, no referral is necessary. " />
        <Faq
          title="Does my child need an evaluation and/or therapy?"
          content="After speaking with one of our clinicians, we will advise you on the necessity of an evaluation and how long the process will take. After your child is evaluated, we will write a report with recommendations. A virtual or in-person meeting will be scheduled to review the evaluation results and recommendations." />
        <Faq
          title="What if I already have an evaluation from another provider?"
          content="We will review any recent evaluation completed within the past 6 months and determine if an updated evaluation is warranted." />
        <Faq
          title="Is GLC able to provide a medical diagnosis of Autism?"
          content="Yes! Our evaluations meet standards for Medicaid, state services, and most insurance companies. " />
      </div>
    </div>
  );
}
export default Faqs;





