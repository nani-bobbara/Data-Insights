
import { Link } from 'react-router-dom';
import { Button } from '@datainsight/ui-components';

const Header = () => {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          DataInsight
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/features" className="text-gray-600 hover:text-primary">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-primary">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button asChild size="sm">
            <Link to="/request-access">Request Access</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
