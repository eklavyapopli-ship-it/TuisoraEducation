import Hero from "./hero"
import OfferCards from "./OfferCards"
import ReviewCards from "./ReviewCards"
import StudyMaterial from "./StudyMaterial"
const Home = () => {
  return (
   <>
   <Hero/>
   <OfferCards/>
   <StudyMaterial/>
   <ReviewCards limit={4}/>
   
   </>
  )
}

export default Home