import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EntriesList from "../../components/EntriesList";

const ProfilePage = () => {
  const { token } = useUserTokenContext();
  const [userEntries, setUserEntries] = useState([]);
  const [username, setUsername] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const body = await res.json();

        if (res.ok) {
          setUserEntries(body.data.entries);
          setUsername(body.data.name);
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
      <h3>{username}</h3>
      <EntriesList canEdit={true} entries={userEntries} />
    </section>
  );
};

export default ProfilePage;
