import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '../../components/Layout';
import AboutPage from '../../pages/About';
import MainPage from '../../pages/Main';
import NotFound from '../../pages/NotFound';

const AppRoutes = () => (
    /* <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/about" Component={AboutPage} />
    </Routes>
    */
    <Routes>
        <Route path="/" Component={Layout}>
            <Route index Component={MainPage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate to="/404" replace />} />
        </Route>
    </Routes>
);

export default AppRoutes;
