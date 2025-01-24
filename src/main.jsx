import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const domNode = document.querySelector('#root');
const rootElement = createRoot(domNode);

rootElement.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
