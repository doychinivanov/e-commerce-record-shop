import { ColorModeProvider } from './contexts/ColorModeCtx'
import { ToastContainer } from 'react-toastify';

import AppRouter from './routes/AppRouter';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" theme="dark" style={{ fontSize: '0.8rem', fontWeight: 'bold' }} />
      <ColorModeProvider>
        <AppRouter />
      </ColorModeProvider>
    </div>
  );
}

export default App;
