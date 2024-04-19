import SectionCar from "../SectionCar/SectionCar"
import iconSedan from "../../../images/icon-sedans.svg" 
import iconSuv from "../../../images/icon-suvs.svg" 
import iconLuxury from "../../../images/icon-luxury.svg" 
import "./App.css"
const App = () => {
    return(
       
        <section> 
        <SectionCar
            titulo="SEDANS"
            texto="Choose a sedan for its affordability and excellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={iconSedan}
            color="hsl(31, 77%, 52%)"
            classe="sedan"
        />
        <SectionCar
            titulo="SUVS"
            texto="Choose a sedan for its affordability and excellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={iconSuv}
            color="hsl(184, 100%, 22%)"
            classe="suv"
        />
        <SectionCar
            titulo="Luxurys"
            texto="Choose a sedan for its affordability and excellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={iconLuxury}
            color="hsl(179, 100%, 13%)"
            classe="luxury"
        />
        </section>
       
    )
}

export default App;