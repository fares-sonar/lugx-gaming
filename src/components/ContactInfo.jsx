import Button from "./Button"

const ContactInfo = () => {
  return (
    <>
    <div className="flex-1">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27327.894474020675!2d30.919584527913802!3d31.110098655314985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7ab78f233021f%3A0xc2cdebb004a208f8!2sKafr%20El-Shaikh%2C%20Qism%20Kafr%20El-Shaikh%2C%20Kafr%20el-Sheikh%2C%20Gharbia%20Governorate!5e0!3m2!1sen!2seg!4v1707844237106!5m2!1sen!2seg" className="rounded-3xl w-full h-[300px] " ></iframe>
      <form className="space-y-4 mt-12 w-full">
        <div className="flex flex-col md:flex md:flex-row gap-4">
          <input className="bg-gray-100 rounded-full p-2 pl-4 w-full" type="text" placeholder="Your Name" />
          <input className="bg-gray-100 rounded-full p-2 pl-4 w-full" type="text" placeholder="Your Surname" />
        </div>
        <div className="flex flex-col md:flex md:flex-row gap-4">
          <input className="bg-gray-100 rounded-full p-2 pl-4 w-full" type="text" placeholder="Your E-mail" />
          <input className="bg-gray-100 rounded-full p-2 pl-4 w-full" type="text" placeholder="Subject" />
        </div>
        <textarea className="bg-gray-100 rounded-2xl p-2 pl-4 block w-full" placeholder="Your Message" cols="70" rows="5"></textarea>
        <Button text='send message now'/>
      </form>
    </div>
    </>
  )
}

export default ContactInfo