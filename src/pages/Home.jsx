import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaDownload, FaApple, FaGooglePlay } from 'react-icons/fa';
import AppCard from '../components/AppCard';
import Loader from '../components/Loader';
import appsData from '../data/appsData';
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const topApps = appsData.slice(0, 8);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="home-page">
      {/* ===== Banner Section ===== */}
      <section className="banner">
        <div className="container banner-content">
          <h1 className="banner-heading">
            We Build <br />
            <span className="banner-highlight">Productive</span> Apps
          </h1>
          <p className="banner-text">
            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          <div className="banner-buttons">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-appstore"
            >
              <FaApple />
              App Store
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-playstore"
            >
              <FaGooglePlay />
              Play Store
            </a>
          </div>
          <div className="banner-image-wrap">
            <img src="./assets/hero.png" alt="Hero Apps" className="banner-image" />
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stats-title">Trusted by Millions, Built for You </div>
          <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-info">
              <p>Total Downloads</p>
              <h3>29.6M</h3>
              <p>21% more than last month</p>
              
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-info">
              <p>Total Reviews</p>
              <h3>908K</h3>
              <p>46% more than last month</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-info">
              <p>Total Apps</p>
              <h3>132+</h3>
              <p>31 more will Launch</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ===== Top Apps Section ===== */}
      <section className="top-apps-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trending Apps</h2>
            <p className="section-subtitle">Explore the most popular apps loved by users</p>
          </div>
          <div className="apps-grid">
            {topApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className="show-all-wrap">
            <Link to="/apps" className="btn btn-show-all">Show All</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
