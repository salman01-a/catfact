import FuzzyText from '../components/temp';
function NotFound(){
return(
<FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={3} 
  enableHover={true}
>
  404 Route Not Found
</FuzzyText >)
}
export default NotFound;