import NavBar from './components/common/header/NavBar';
import {ColorModeProvider} from './contexts/ColorModeCtx'
import CatalogList from './components/catalog/CatalogList';
import Example from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      <ColorModeProvider>
        <NavBar/>
        <Example />
        <CatalogList />
      </ColorModeProvider>
    </div>
  );
}

export default App;
