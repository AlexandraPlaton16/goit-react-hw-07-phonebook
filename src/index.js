import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: Update this import
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App/App';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
