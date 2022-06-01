import React, {Suspense, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from "./pages/SignUp";
import Loader from './components/common/Loader';
import Footer from './components/common/Footer';
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PricingSubscription from "./pages/PricingSubscription";
import PageHeader from "./components/common/PageHeader";
import TrendingPost from "./pages/TrendingPost";
import SuggestedPlan from "./pages/SuggestedPlan";
import CustomerPlan from "./components/CustomerPlan";
const NoMatch = lazy(() => import('./pages/NoMatch'));
const Home = lazy(() => import('./components/common/Home'));
const Publish = lazy(() => import('./pages/admin/Publish'));
const Account = lazy(() => import('./pages/admin/Account'));
const Statistics = lazy(() => import('./pages/admin/Statistics'));
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
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/suggested-plan" element={<SuggestedPlan/>}/>
                    <Route path="/customer-plan" element={<CustomerPlan/>}/>
                    <Route path="/pages" element={<PageHeader/>}>
                        <Route index={true} element={<TrendingPost/>}/>
                        <Route path="about-us" element={<AboutUs/>}/>
                        <Route path="pricing-Subscription" element={<PricingSubscription/>}/>
                        <Route path="contact-us" element={<ContactUs/>}/>
                    </Route>
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
