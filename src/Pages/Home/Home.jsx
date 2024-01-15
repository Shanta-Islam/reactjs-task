import About from "./About";
import Banner from "./Banner";
import Business from "./Business";
import Certifications from "./Certifications";
import Gallery from "./Gallery";
import Strength from "./Strength";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Business></Business>
            <Strength></Strength>
            <Gallery></Gallery>
            <Certifications></Certifications>
        </div>
    );
};

export default Home;