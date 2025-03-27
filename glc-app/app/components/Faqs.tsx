import Faq from "./Faq";

const Faqs = () => {
  return (
    <div className="faqs flex flex-wrap py-24 lg:py-36  lg:px-24 bg-blue-50" >
      <div className="faqs__col basis-full lg:basis-1/3 px-12 lg:px-0">
        <h2 className="text-7xl">Frequently Asked Questions</h2>
      </div>
      <div className="faqs__col basis-full lg:basis-2/3">
        <Faq
          title="What is the process to get started? What can I expect?"
          content="Call us at 864-451-2563 to discuss any questions or concerns you may have. You can also book a free consultation appointment online. Just click the Request Appointment button to see current availability. " />
        <Faq
          title="Do you accept insurance?"
          content="We currently accept traditional Healthy Connections Medicaid Fee For Service (FFS), Molina Medicaid, Select Health (First Choice) Medicaid. We also offer self-pay options. Please check back for additional insurance options. " />
        <Faq
          title="How long will it take to get an appointment? "
          content="We can typically schedule a consultation right away. Wait times vary depending on what type of evaluation is needed." />
        <Faq
          title="Do I need a doctor’s referral? "
          content="Yes. If you are seeking an evaluation or therapy using any form of insurance a physician's referral is needed.  A prior authorization for service may also be required.
	If you are a private-pay client, no referral is necessary. " />
        <Faq
          title="Does my child need an evaluation and / or therapy ?"
          content="After speaking with one of our clinician’s we will advise you on the necessity of an evaluation and how long the process will take.After your child is evaluated we will write a report with recommendations.A virtual or in -person meeting will be scheduled to review the evaluation results and recommendations. " />
        <Faq
          title="What if I already have an evaluation from another provider ?"
          content="We will review any recent evaluation completed within the past 6 months and determine if an updated evaluation is warranted." />
      </div>
    </div>
  );
}
export default Faqs;





