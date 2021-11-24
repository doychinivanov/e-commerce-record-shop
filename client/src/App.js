import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ColorModeProvider } from './contexts/ColorModeCtx'
import { AuthProvider } from './contexts/AuthCtx';
import store from './redux/store';

import AppRouter from './routes/AppRouter';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" theme="dark" style={{ fontSize: '0.8rem', fontWeight: 'bold' }} />
      
      <Provider store={store}>
        <AuthProvider>
          <ColorModeProvider>
            <AppRouter />
          </ColorModeProvider>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
