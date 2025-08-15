import { Link } from 'react-router-dom';
import { UrlState } from '@/context';

const Header = () => {
  const { user, isAuthenticated, fnLogout } = UrlState();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">
          URL Shortener
        </Link>
        
        <nav className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-primary">
                Dashboard
              </Link>
              <button
                onClick={fnLogout}
                className="text-gray-600 hover:text-primary"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="text-gray-600 hover:text-primary">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;