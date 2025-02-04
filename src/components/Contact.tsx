import ContactForm from "./ContactForm"

 

function Contact() {
  return (
   <section className="grid gird-cols-1 grid-rows-[auto_auto] gap-12.5 md:max-w-[445px] md:mx-auto lg:max-w-full lg:gap-x-[220px] lg:mx-0 lg:grid-cols-2 lg:grid-rows-[auto]">
    <div className="flex flex-col items-center gap-5  lg:gap-8 lg:items-start">
      <h3 className="text-[40px] font-bold text-white md:text-7xl">Contact</h3>
      <p className="text-grey text-base font-medium text-center md:text-body lg:text-left"> I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
    </div>
    <ContactForm/>
    <div></div>
   </section>
  )
}

export default Contact