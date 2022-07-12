import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";
import EntryInfo from "../EntryInfo";

const EditEntryForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
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

      toast.success("URL uploaded succesfully");
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
      <form className="create-entry-form" onSubmit={createEntry}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={title}
          placeholder={"Como hago esto?"}
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

export default EditEntryForm;
