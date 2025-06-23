import BlurText from '../components/BlurText'

function HomePage() {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <BlurText
            text="Hello World"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            
        />
    )
}
export default HomePage