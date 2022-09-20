import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxProvider from './store/ReduxProvider';
import CustomThemeProvivder from './theme/CustomThemeProvivder';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <AuthProvider>
          <CustomThemeProvivder>
            <App />
          </CustomThemeProvivder>
        </AuthProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
