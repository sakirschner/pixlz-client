import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './app.css';
import AppRedirect from './AppRedirect';

export default function Main() {
  return (
    <React.StrictMode>
      <AppRedirect />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
