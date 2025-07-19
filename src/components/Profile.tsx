import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import bannerDefault from '../assets/images/banner.jpg';
import profileDefault from '../assets/images/profile.webp'; 

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState<string>(bannerDefault);
  const [profileUrl, setProfileUrl] = useState<string>(profileDefault);

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-[94%] ml-[5rem]">
      {/* Banner Image */}
      <div className="relative">
        <img
          className="w-full h-[200px] object-cover rounded-lg"
          src={bannerUrl}
          alt="Banner"
        />

        {/* Banner Camera Icon */}
        <label
          htmlFor="banner-upload"
          className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600"
          title="Change Banner"
        >
          <FaCamera size={24} />
        </label>
        <input
          type="file"
          id="banner-upload"
          accept="image/*"
          className="hidden"
          onChange={handleBannerChange}
        />
      </div>

      {/* Profile Picture and Info */}
      <div className="flex items-center gap-6 ml-4 mt-8">
        <div className="relative w-40 h-40">
          <img
            src={profileUrl}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
          />

          {/* Centered Profile Camera Icon */}
          <label
            htmlFor="profile-upload"
            className="absolute top-1/2 left-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:bg-gray-600"
            title="Change Profile Picture"
          >
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </div>

        {/* Channel Details */}
        <div>
          <h1 className="text-2xl font-bold">Afsana Mim</h1>
          <p className="mt-2 text-sm text-gray-700">This is a Data Science site. Learn how to analyze, visualize, and make predictions using real-world datasets.</p>
          <p className="mt-1 text-sm text-gray-700">Explore topics like Machine Learning, Deep Learning, Python Programming, and AI-powered tools used in the industry.</p>
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
