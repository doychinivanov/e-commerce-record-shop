import NavBar from "../components/common/header/NavBar";
import CatalogList from "../components/catalog/CatalogList";
import CarouselConveyer from "../components/carousel/Carousel";
import Filter from "../components/searchFilter/Filter";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/common/footer/Footer";

import { useColorMode } from "../contexts/ColorModeCtx";

const LandingPage = () => {
    const {theme} = useColorMode();

    return (
        <>
            <NavBar theme={theme} />
            <CarouselConveyer theme={theme} />
            <Filter theme={theme} />
            <CatalogList theme={theme} />
            <Newsletter theme={theme} />
            <Footer theme={theme} />
        </>
    )

}

export default LandingPage;