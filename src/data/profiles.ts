export const profileImages = [
  '/images/profiles/girl1.jpg',
  '/images/profiles/girl2.jpg',
  '/images/profiles/girl3.jpg',
  '/images/profiles/girl4.jpg',
  '/images/profiles/girl5.jpg',
  '/images/profiles/girl6.jpg',
  '/images/profiles/girl7.jpg',
  '/images/profiles/girl8.jpg',
  '/images/profiles/girl9.jpg',
  '/images/profiles/girl10.jpg',
  '/images/profiles/girl11.jpg',
  '/images/profiles/girl12.jpg',
  '/images/profiles/girl13.jpg',
  '/images/profiles/girl14.jpg',
  '/images/profiles/girl15.jpg',
];

export const generateProfiles = (location: string) => {
  return profileImages.map((image, index) => ({
    id: index + 1,
    image,
    name: `${location} Angel ${index + 1}`,
    age: Math.floor(Math.random() * (30 - 20) + 20),
  }));
};