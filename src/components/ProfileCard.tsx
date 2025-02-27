interface ProfileCardProps {
  image: string;
  name: string;
  age: number;
}

const ProfileCard = ({ image, name, age }: ProfileCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative pb-[100%]">
        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300">Age: {age}</p>
      </div>
    </div>
  );
};

export default ProfileCard;