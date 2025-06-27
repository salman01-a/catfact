import BlurText from '../components/BlurText';
import Particles from '../components/Particles';

function HomePage() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',         // Full tinggi layar
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000' // Opsional
      }}
    >
      {/* Particles sebagai background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Teks di atas partikel */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: '#fff',
          fontSize: '48px'
        }}
      >
        <BlurText
          text="Hello World"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
}

export default HomePage;
