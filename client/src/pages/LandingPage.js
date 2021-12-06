import { useState } from "react";

import NavBar from "../components/common/header/NavBar";
import CatalogList from "../components/catalog/CatalogList";
import CarouselConveyer from "../components/carousel/Carousel";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/common/footer/Footer";

import { useColorMode } from "../contexts/ColorModeCtx";
import { useSearchParams  } from "react-router-dom";

const LandingPage = () => {
    const {theme} = useColorMode();
    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get('query');

    return (
        <>
            <NavBar theme={theme} />
            {!searchQuery ? <CarouselConveyer theme={theme} /> : null}
            <CatalogList theme={theme} />
            {!searchQuery ? <Newsletter theme={theme} /> : null}
            <Footer theme={theme} />
        </>
    )

}

export default LandingPage;