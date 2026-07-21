import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react';//So StrictMode is a component provided by React and you therefore use it like a component.
// one of the most important things

// the StrictMode component does

// is that it will execute every component function twice

// instead of just once.
ReactDOM.createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
