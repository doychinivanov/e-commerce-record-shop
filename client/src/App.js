import {ColorModeProvider} from './contexts/ColorModeCtx'

import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <ColorModeProvider>
        <AppRouter />
      </ColorModeProvider>
    </div>
  );
}

export default App;
