
const ContactContent = () => {
  return (
    <>
      <div className="p-10 bg-gray-100 rounded-2xl w-full  flex-1">
        <div className="">
          <h3 className="text-lightRed uppercase font-bold">contact us</h3>
          <h2 className="font-bold text-2xl capitalize mt-6">say hello!</h2>
          <p  className="my-10">LUGX Gaming Template is based on the  Tailwind CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
        </div>
        <form>
          <div className="my-8">
            <label htmlFor="address">Address</label>
            <input className="block bg-transparent outline-none" type="text" id="address" readOnly placeholder="Kar_Elshiek, Cairo, Egypt" />
          </div>
          <div className="my-8">
            <label htmlFor="number">Phone</label>
            <input className="block bg-transparent outline-none" type="text" id="address" readOnly placeholder="+201 080 246 825" />
          </div>
          <div className="my-8">
            <label htmlFor="address">E-mail</label>
            <input className="block bg-transparent outline-none" type="text" id="address" readOnly placeholder="faressonar678@mgil.com" />
          </div>
          
        </form>
      </div>
    </>
  )
}

export default ContactContent