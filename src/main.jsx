import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const domNode = document.getElementById('root');
const rootEl = createRoot(domNode);

rootEl.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
