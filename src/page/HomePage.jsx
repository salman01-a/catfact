import BlurText from '../components/BlurText';
import Particles from '../components/Particles';
import axios, { Axios } from 'axios';
import { useState ,useEffect} from 'react';
function HomePage() {
// fetch("https://catfact.ninja/fact").then(res => res.json()).then(data => console.log(data))

const [catFact, setFact]= useState("");

useEffect(()=>{
  axios.get("https://catfact.ninja/fact")
  .then(res => setFact(res.data.fact))

},[])
console.log(catFact)



  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (

<>
    <div className="container">
      <div className="background">
      <Particles/>
      </div>
      <div className="center-text">

      <div className="fact">
        <BlurText
        text={catFact}
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-center"
      /></div>
      
      </div>
    </div>
</>
  )
};

export default HomePage;
