import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfilePage = () => {
  const { token } = useUserTokenContext();
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/profile`);
        const body = await res.json();

        if (res.ok) {
          setProfile(body.data);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProfile();
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <section>
      <h2>Profile Page</h2>
      <p>{profile}</p>
    </section>
  );
};

export default ProfilePage;
