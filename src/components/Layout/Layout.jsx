import { useCallback, useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';

import Button from '../Button';

// const Layout = () => {
//     return (

//     );
// };

export const Layout = () => {
    const [shouldNavigateToHome, setShouldNavigateToHome] = useState(false);

    const handleClick = useCallback(() => {
        setShouldNavigateToHome(true);
    }, []);

    return (
        <div>
            <h2>Here is our header</h2>
            {!shouldNavigateToHome && <h3>Conditional part</h3>}
            <Button onClick={handleClick}> Navigate to Home Page </Button>
            <Outlet />
            <nav>
                {/* {shouldNavigateToHome ? <Navigate to="/">Home Page</Navigate> : undefined} */}
                {shouldNavigateToHome && <Navigate to="/">Home Page</Navigate>}
                <Link to="/">Home Page</Link>
                <br />
                <Link to="/about">About Page</Link>
            </nav>
        </div>
    );
};
