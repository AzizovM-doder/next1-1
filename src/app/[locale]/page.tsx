import HomeHero from "./components/home/homeHero"
import HomeCapabilities from "./components/home/homeCapabilities"
import HomeVoices from "./components/home/homeVoices"
import HomeProcess from "./components/home/homeProcess"
import HomeEvolve from "./components/home/homeEvolve"

const page = () => {
  return (
    <main>
      <HomeHero />
      <HomeProcess />
      <HomeCapabilities />
      <HomeVoices />
      <HomeEvolve/>
    </main>
  )
}

export default page