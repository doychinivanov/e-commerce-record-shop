import NavBar from './components/common/header/NavBar';
import {ColorModeProvider} from './contexts/ColorModeCtx'
import CatalogList from './components/catalog/CatalogList';
import CarouselConveyer from './components/carousel/Carousel';
import Filter from './components/searchFilter/Filter';
import Newsletter from './components/newsletter/Newsletter'

function App() {

  return (
    <div className="App">
      <ColorModeProvider>
        <NavBar/>
        <CarouselConveyer />
        <Filter />
        <CatalogList />
        <Newsletter />
      </ColorModeProvider>
    </div>
  );
}

export default App;
