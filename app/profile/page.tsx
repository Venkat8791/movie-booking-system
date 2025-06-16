import { NextPage } from "next";
import ProfileComponent from "../_components/Profile/ProfileComponent";

const ProfilePage: NextPage = () => {
  return (
    <div className="p-4">
      <ProfileComponent />
    </div>
  );
};

export default ProfilePage;
