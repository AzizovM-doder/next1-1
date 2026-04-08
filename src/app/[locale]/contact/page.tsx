import Image from "next/image"
import ContactDetails from "../components/contact/contactDetails"
import ContactHero from "../components/contact/contactHero"
import FAQ from "../components/contact/FAQ"

 
const page = () => {
  return (
    <main>
      <ContactHero/>
      <ContactDetails/>
      <div className="max-w-7xl m-auto p-5">

      <Image width={1000} height={400} src="/images/image14.png" alt="image" className="h-full w-full" />
      </div>
      <FAQ/>
    </main>
  )
}

export default page