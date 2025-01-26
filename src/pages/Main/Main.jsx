import './Main.css';

import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import viteLogo from '/vite.svg';

import reactLogo from '../../assets/react.svg';
import Button from '../../components/Button'; // './components/Button/index.js'

function App() {
    const [count, setCount] = useState(0);
    // let count = 0;

    // function setCount() {
    //     // count = count + 1;
    //     count += 1;

    //     console.log('count =', count);
    // }

    useEffect(() => {
        console.log('count =', count);

        return () => {
            console.log('unmount =', count);
        };
    }, [count]);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Our first app</p>
        </>
    );
}

export default App;
