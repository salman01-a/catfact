import BlurText from "../components/BlurText";
import Particles from "../components/Particles";
import axios, { Axios } from "axios";
import { useState, useEffect, useRef   } from "react";
import logo from "../assets/balloon.gif"
import sound from "../assets/balloon.mp3"
function HomePage() {
  // fetch("https://catfact.ninja/fact").then(res => res.json()).then(data => console.log(data))

  const [catFact, setFact] = useState("");

  useEffect(() => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setFact(res.data.fact));
  }, []);
  console.log(catFact);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const sounds= useRef(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);
  function playMusic() {
    if (isPlaying) {
      sounds.current.pause();
    } else {
      sounds.current.play();
    }
    setIsPlaying(!isPlaying);
  }
  return (
    <>
      <div className="container">
        <div className="background">
          <Particles />
        </div>
        <div className="center-text">
          <div className="gif"><img src={logo} alt="its a cat" onClick={playMusic} /></div>
            <div className="general-text">
                <h1>One Fact About Cat</h1>                  
              </div>
          <div className="fact">
            <BlurText
              text={catFact}
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
