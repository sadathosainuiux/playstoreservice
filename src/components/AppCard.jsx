import { Link } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';
import './AppCard.css';

const AppCard = ({ app }) => {
  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  return (
    <Link to={`/app/${app.id}`} className="app-card">
      <div className="app-card-img-wrap">
        <img src={app.image} alt={app.title} className="app-card-img" />
      </div>
      <div className="app-card-info">
        <h3 className="app-card-title">{app.title}</h3>
        <p className="app-card-company">{app.companyName}</p>
        <div className="app-card-meta">
          <span className="app-card-rating">
            <FaStar className="star-icon" />
            {app.ratingAvg}
          </span>
          <span className="app-card-downloads">
            <FaDownload className="download-icon" />
            {formatDownloads(app.downloads)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
