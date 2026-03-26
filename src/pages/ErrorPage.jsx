import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container error-content">
        <img src="/assets/error-404.png" alt="404 Error" className="error-img" />
        <h1>Oops, page not found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn btn-go-home">Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
