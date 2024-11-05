import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Landing from './components/Landing';
import Certificates from './components/Certificates';
import About from './components/About';
import RecentCourses from './components/RecentCourses';
import MovingClouds from './components/MovingClouds';
import RecentBlogs from './components/RecentBlogs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PageHeader from './components/PageHeader';
import AllBlogs from './components/AllBlogs';
import AllCourses from './components/AllCourses';
import AllCertificates from './components/AllCertificates';



function App() {

return (
    <div className="App">
            <Navbar />

            <Routes>

                
                <Route path="/" element={
                        <>
                            <MovingClouds />
                            <Landing />
                            <Certificates />
                            <About />
                            <RecentCourses />
                            <RecentBlogs />

                        </>
                    } />

                    <Route path="/login" element={
                        <>
                            <Login />

                        </>
                    } />

                    
                    <Route path="/blogs" element={
                        <>
                            <PageHeader header="المدونات" link="/blogs" text="المدونات" tag="مدونة" />
                            <AllBlogs />
                        </>
                    } />

                    <Route path="/courses" element={
                        <>
                            <PageHeader header="الكورسات" link="/courses" text="الكورسات" tag="دورة" />
                            <AllCourses />
                        </>
                    } />

                    <Route path="/certificates" element={
                        <>
                            <PageHeader header="دليل الشهادات المهنية" link="/certificates" text="الشهادات" tag="شهادة" />
                            <AllCertificates />
                        </>
                    } />




            </Routes>


            <Footer />

    </div>
);
}

export default App;
