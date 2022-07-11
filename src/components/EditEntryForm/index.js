import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";

const CreateEntryForm = () => {
  const [title, setTitle] = useState({ title });
  const [description, setDescription] = useState({ description });
  const [url, setUrl] = useState({ url });
  const [error, setError] = useState("");
  const { token } = useUserTokenContext();
  const navigate = useNavigate();

  const createEntry = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/entries/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, description, url }),
        }
      );

      const postEntryBody = await res.json();

      if (!res.ok) {
        throw new Error(postEntryBody.message);
      }

      toast.success("URL updated succesfully");
      navigate(`/profile`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <form onSubmit={createEntry}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label htmlFor="url">URL:</label>
        <input
          id="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />

        <Button>Send!</Button>
      </form>

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default CreateEntryForm;
