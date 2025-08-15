import { Link } from 'react-router-dom';
import { UrlState } from '@/context';

const LandingPage = () => {
  const { isAuthenticated } = UrlState();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">URL Shortener</h1>
      <p className="text-xl text-gray-600 mb-8">
        Shorten your long URLs and track their performance
      </p>
      
      {isAuthenticated ? (
        <Link
          to="/dashboard"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90"
        >
          Go to Dashboard
        </Link>
      ) : (
        <Link
          to="/auth"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90"
        >
          Get Started
        </Link>
      )}
    </div>
  );
};

export default LandingPage;