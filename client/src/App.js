import NavBar from './components/common/header/NavBar';
import {ColorModeProvider} from './contexts/ColorModeCtx'

function App() {
  return (
    <div className="App">
      <ColorModeProvider>
      <header className="App-header">
        <NavBar/>
      </header>
      </ColorModeProvider>
    </div>
  );
}

export default App;
