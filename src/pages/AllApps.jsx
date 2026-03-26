import { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import AppCard from '../components/AppCard';
import Loader from '../components/Loader';
import appsData from '../data/appsData';
import './AllApps.css';

const AllApps = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('default');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Debounced search with loading
  useEffect(() => {
    setSearchLoading(true);
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setSearchLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredApps = useMemo(() => {
    let apps = appsData.filter(app =>
      app.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    if (sortOrder === 'high-low') {
      apps = [...apps].sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === 'low-high') {
      apps = [...apps].sort((a, b) => a.downloads - b.downloads);
    }

    return apps;
  }, [debouncedSearch, sortOrder]);

  if (loading) return <Loader />;

  return (
    <div className="all-apps-page">
      <div className="container">
        {/* Title Section */}
        <div className="all-apps-header">
          <h1 className="page-title">Our All Applications</h1>
          <p className="page-subtitle">Browse and discover all available apps in our store</p>
        </div>

        {/* Search & Controls */}
        <div className="all-apps-controls">
          <div className="apps-count">
            <span className="count-badge">{filteredApps.length}</span> Apps Available
          </div>
          <div className="controls-right">
            <div className="sort-dropdown">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="sort-select"
              >
                <option value="default">Sort by Downloads</option>
                <option value="high-low">High → Low</option>
                <option value="low-high">Low → High</option>
              </select>
            </div>
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        {searchLoading ? (
          <Loader />
        ) : filteredApps.length > 0 ? (
          <div className="apps-grid">
            {filteredApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="no-apps-found">
            <img src="/assets/App-Error.png" alt="No apps found" className="no-apps-img" />
            <h3>No App Found</h3>
            <p>Try searching with a different keyword</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
