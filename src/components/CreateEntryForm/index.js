import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";

const CreateEntryForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const { token } = useUserTokenContext();
  //   const navigate = useNavigate();

  const createEntry = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, url }),
      });

      const postEntryBody = await res.json();

      if (!res.ok) {
        throw new Error(postEntryBody.message);
      }

      //   const {
      //     data: { id },
      //   } = postEntryBody;

      toast.success("URL uploaded succesfully");
      //   navigate(`/entry/${id}`);
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
