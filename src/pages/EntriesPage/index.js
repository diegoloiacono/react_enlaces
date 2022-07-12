import { useState, useEffect } from "react";
import EntriesList from "../../components/EntriesList";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import CreateEntryPage from "../CreateEntryPage";
import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";

const EntriesPage = () => {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState("");
  const { token } = useUserTokenContext();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/entriesWithVotes`
        );
        const body = await res.json();

        if (res.ok) {
          setEntries(body.data);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEntries();
  }, []);

  const getEntriesByDate = async (e) => {
    e.preventDefault();
    try {
      setEntries([]);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/entries/${date}`
      );
      const body = await res.json();

      if (res.ok) {
        setEntries(body.data);
      } else {
        throw new Error(body.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      {token && <CreateEntryPage />}
      <form onSubmit={getEntriesByDate}>
        <label htmlFor="date">Filtra por fecha: </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Button>Busca!</Button>
      </form>
      <EntriesList canEdit={false} entries={entries} />
      {error && <ErrorMessage error={error} />}
    </section>
  );
};

export default EntriesPage;
