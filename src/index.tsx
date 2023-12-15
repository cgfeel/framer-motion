import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import Footer from './components/Footer';
import GithubCorner from './components/GithubCorner';
import Refresh from './components/Refresh';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Router key={count} />
      <Refresh 
        onClick={() => setCount(count + 1)} 
      />
      <GithubCorner />
      <Footer
        title="Enter animation"
        url="https://framer.com/docs/animation/"
      />
    </>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
