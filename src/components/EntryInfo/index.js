import Button from "../Button";
import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import useCheckLike from "../../hooks/useCheckLike";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./style.css";

const EntryInfo = ({ entry }) => {
  const { id, title, url, description, votes: initialVotes } = entry;
  const { token } = useUserTokenContext();
  const [votes, setVotes] = useState(initialVotes);
  const { didUserLikeEntry, setDidUserLikeEntry } = useCheckLike(id);

  const voteEntry = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/entries/${id}/vote`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.message);
      }

      setDidUserLikeEntry(!didUserLikeEntry);

      if (didUserLikeEntry) {
        setVotes(votes - 1);
      } else {
        setVotes(votes + 1);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="entry-card">
      <div className="entry-data">
        <header>
          <h2>{title}</h2>
        </header>

        <p>Description: {description}</p>

        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </div>
      <div className="url-like">
        {token && (
          <Button className="like-button" onClick={voteEntry}>
            {didUserLikeEntry ? <FaHeart /> : <FaRegHeart />}
          </Button>
        )}

        {votes && <span>{votes}</span>}
      </div>
    </section>
  );
};

export default EntryInfo;
