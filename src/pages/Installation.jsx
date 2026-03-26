import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import './Installation.css';

const Installation = () => {
  const [loading, setLoading] = useState(true);
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
      setInstalledApps(apps);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleUninstall = (appId, appTitle) => {
    const updated = installedApps.filter(app => app.id !== appId);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
    toast.info(`${appTitle} has been uninstalled 🗑️`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="installation-page">
      <div className="container">
        <div className="installation-header">
          <h1 className="page-title">Your Installed Apps</h1>
          <p className="page-subtitle">Manage all your installed applications</p>
        </div>

        {installedApps.length > 0 ? (
          <div className="installed-list">
            {installedApps.map(app => (
              <div key={app.id} className="installed-card">
                <Link to={`/app/${app.id}`} className="installed-card-info">
                  <img src={app.image} alt={app.title} className="installed-card-img" />
                  <div className="installed-card-text">
                    <h3>{app.title}</h3>
                    <p>{app.companyName}</p>
                  </div>
                </Link>
                <button
                  className="uninstall-btn"
                  onClick={() => handleUninstall(app.id, app.title)}
                >
                  <FaTrashAlt />
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-installed">
            <img src="/assets/App-Error.png" alt="No installed apps" className="no-installed-img" />
            <h3>OPPS!! APP NOT FOUND</h3>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to="/apps" className="btn btn-browse">Browse Apps</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
