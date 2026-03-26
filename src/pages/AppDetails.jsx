import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaDownload, FaComments, FaCheckCircle } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import appsData from '../data/appsData';
import './AppDetails.css';

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#00C896'];

const AppDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  const app = appsData.find(a => a.id === parseInt(id));

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (app) {
      const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
      setInstalled(installedApps.some(a => a.id === app.id));
    }
  }, [app]);

  const handleInstall = () => {
    if (!app || installed) return;

    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    installedApps.push(app);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    setInstalled(true);
    toast.success(`${app.title} installed successfully! 🎉`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  if (loading) return <Loader />;

  if (!app) {
    return (
      <div className="app-not-found">
        <div className="container">
          <img src="/assets/App-Error.png" alt="App not found" className="not-found-img" />
          <h2>Oops! App Not Found</h2>
          <p>The app you are looking for does not exist or may have been removed.</p>
          <Link to="/apps" className="btn btn-back-apps">Browse Apps</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="app-details-page">
      <div className="container">
        {/* App Info Section */}
        <div className="app-info-section">
          <div className="app-info-image">
            <img src={app.image} alt={app.title} />
          </div>
          <div className="app-info-content">
            <h1 className="app-info-title">{app.title}</h1>
            <p className="app-info-company">{app.companyName}</p>
            <div className="app-info-stats">
              <div className="info-stat">
                <FaStar className="info-stat-icon rating-icon" />
                <div>
                  <strong>{app.ratingAvg}</strong>
                  <span>Rating</span>
                </div>
              </div>
              <div className="info-stat">
                <FaDownload className="info-stat-icon download-icon" />
                <div>
                  <strong>{formatNumber(app.downloads)}</strong>
                  <span>Downloads</span>
                </div>
              </div>
              <div className="info-stat">
                <FaComments className="info-stat-icon review-icon" />
                <div>
                  <strong>{formatNumber(app.reviews)}</strong>
                  <span>Reviews</span>
                </div>
              </div>
            </div>
            <button
              className={`install-btn ${installed ? 'installed' : ''}`}
              onClick={handleInstall}
              disabled={installed}
            >
              {installed ? (
                <>
                  <FaCheckCircle /> Installed
                </>
              ) : (
                'Install'
              )}
            </button>
          </div>
        </div>

        {/* Review Chart Section */}
        <div className="app-chart-section">
          <h2 className="chart-title">App Reviews</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={app.ratings} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis dataKey="name" tick={{ fontSize: 13, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 13, fill: '#6b7280' }} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '10px',
                    border: 'none',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    fontFamily: 'Inter'
                  }}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={45}>
                  {app.ratings.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description Section */}
        <div className="app-description-section">
          <h2 className="description-title">Description</h2>
          <p className="description-text">{app.description}</p>
          <div className="description-meta">
            <div className="meta-item">
              <span className="meta-label">Size</span>
              <span className="meta-value">{app.size} MB</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Developer</span>
              <span className="meta-value">{app.companyName}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Total Reviews</span>
              <span className="meta-value">{app.reviews.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
