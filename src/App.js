import React, {Suspense, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/common/Header';
import LogIn from './pages/LogIn';
import Pictures from './pages/company_deshboard/publish/Pictures';
import ImageUpload from './pages/company_deshboard/publish/ImageUpload';

// import Publish from "./pages/admin_deshboard/publish";
// import AccountPreference from './pages/admin_deshboard/publish/Product_Categories_Preference';
// import Publish from './pages/company_deshboard/publish';

import Loader from './components/common/Loader';
// import Footer from './pages/admin/Footer';
import Footer from './components/common/Footer';

const NoMatch = lazy(() => import('./pages/NoMatch'));
const Home = lazy(() => import('./components/common/Home'));
const Publish = lazy(() => import('./pages/admin/Publish'));
const Account = lazy(() => import('./pages/admin/Account'));
const Statistics = lazy(() => import('./pages/admin/Statistics'));
// const AdminHeader = lazy(() => import("./pages/admin/AdminHeader"));
const AdminHeader = lazy(() => import("./components/common/AdminHeader"));
const Company_Publish = lazy(() => import('./pages/company/Publish'));
const Company_Account = lazy(() => import('./pages/company/Account'));
const Company_Statistics = lazy(() => import('./pages/company/Statistics'));

function App() {
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/admin" element={<AdminHeader/>}>
                        <Route index={true} element={<Publish/>}/>
                        <Route path="statistics" element={<Statistics/>}/>
                        <Route path="account" element={<Account/>}/>
                    </Route>
                    <Route path="/company" element={<AdminHeader/>}>
                        <Route index={true} element={<Company_Publish/>}/>
                        <Route path="statistics" element={<Company_Statistics/>}/>
                        <Route path="account" element={<Company_Account/>}/>
                    </Route>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </>
        // <Routes>
        // {/*<Route path='/' element={<SignUp/>}/>*/}
        // <Route path="/header" element={<Header/>}/>
        // <Route path="/login" element={<LogIn/>}/>
        // {/*<Route path='/dashboardheder' element={<DashboardHeader/>}/>*/}
        // {/*<Route path='/picture' element={<Pictures/>}/>*/}
        // {/*<Route path='/image' element={<ImageUpload/>}/>*/}
        // {/*<Route path='/footer' element={<Footer/>}/>*/}
        // {/*<Route path='/publish' element={<Publish/>}/>*/}
        // <Route path="/admin" element={<AccountPreference/>}/>
        // <Route path="/publish" element={<Publish/>}/>
        // </Routes>
    );
}

export default App;
