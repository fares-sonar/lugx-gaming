import { ContactContent, ContactInfo } from "../components"

const ContactForm = () => {
  return (
    <>
      <section className="max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex md:flex-row flex-wrap items-center  gap-4 my-10">
          <ContactContent/>
          <ContactInfo />
        </div>
      </section>
    </>
  )
}

export default ContactForm