import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import Installation from './pages/Installation';
import ErrorPage from './pages/ErrorPage';
import './App.css';

function App() {
  const location = useLocation();
  const [routeLoading, setRouteLoading] = useState(false);

  useEffect(() => {
    setRouteLoading(true);
    const timer = setTimeout(() => setRouteLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {routeLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
            <Route path="/app/:id" element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
