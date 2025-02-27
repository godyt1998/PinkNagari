import { Link } from 'react-router-dom';
import { jaipurLocations } from '../data/locations';

const JaipurDirectory = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Jaipur Locations
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {jaipurLocations.map((location) => (
            <Link
              key={location}
              to={`/jaipur/${location.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {location}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                View Profiles →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JaipurDirectory;