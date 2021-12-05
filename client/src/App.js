import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import { ColorModeProvider } from './contexts/ColorModeCtx'
import { AuthProvider } from './contexts/AuthCtx';
import { store, persistor } from './redux/store';

import AppRouter from './routes/AppRouter';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" theme="dark" style={{ fontSize: '0.8rem', fontWeight: 'bold' }} />

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AuthProvider>
            <ColorModeProvider>
              <AppRouter />
            </ColorModeProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
