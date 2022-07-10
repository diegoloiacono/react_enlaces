import { useState, useEffect } from "react";
import { useUserTokenContext } from "../contexts/UserTokenContext";

const useCheckLike = (entryId) => {
  const [didUserLikeEntry, setDidUserLikeEntry] = useState(false);
  const [error, setError] = useState("");

  const { token } = useUserTokenContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/entries/${entryId}/checkVote`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const body = await res.json();

        if (res.ok) {
          setDidUserLikeEntry(body.data);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    token && fetchData();
  }, [token, entryId]);

  return { didUserLikeEntry, setDidUserLikeEntry, error };
};

export default useCheckLike;
