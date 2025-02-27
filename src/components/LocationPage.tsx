import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import { FaArrowLeft } from 'react-icons/fa';
import { generateProfiles } from '../data/profiles';

const LocationPage = () => {
  const { location } = useParams<{ location: string }>();
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    if (location) {
      const locationProfiles = generateProfiles(location);
      setProfiles(locationProfiles);
    }
  }, [location]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center">
          <Link
            to="/jaipur"
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Locations
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white ml-4">
            {location}
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;