import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ThemeContextProvider from './context/ThemeContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
