import NavBar from './components/common/header/NavBar';
import {ColorModeProvider} from './contexts/ColorModeCtx'
import CatalogList from './components/catalog/CatalogList';
import CarouselConveyer from './components/carousel/Carousel';

function App() {

  return (
    <div className="App">
      <ColorModeProvider>
        <NavBar/>
        <CarouselConveyer />
        <CatalogList />
      </ColorModeProvider>
    </div>
  );
}

export default App;
