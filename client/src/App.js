import NavBar from './components/common/header/NavBar';
import {ColorModeProvider} from './contexts/ColorModeCtx'
import CatalogList from './components/catalog/CatalogList';

function App() {
  return (
    <div className="App">
      <ColorModeProvider>
        <NavBar/>
        <CatalogList />
      </ColorModeProvider>
    </div>
  );
}

export default App;
