import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EntriesList from "../../components/EntriesList";
import ErrorMessage from "../../components/ErrorMessage";

const ProfilePage = () => {
  const { token } = useUserTokenContext();
  const [userEntries, setUserEntries] = useState([]);
  const [username, setUsername] = useState([]);
  const [error, setError] = useState("");

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
        setError(error.message);
      }
    };

    fetchProfile();
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <section>
      <h2>My Profile Page</h2>
      <h3>Username: {username}</h3>
      <EntriesList canEdit={true} entries={userEntries} />
      {error && <ErrorMessage error={error} />}
    </section>
  );
};

export default ProfilePage;
