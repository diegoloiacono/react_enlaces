import { useState, useEffect } from "react";
import EntriesList from "../../components/EntriesList";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import CreateEntryPage from "../CreateEntryPage";
import Button from "../../components/Button";

const EntriesPage = () => {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState("");
  const { token } = useUserTokenContext();

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
        alert(error.message);
      }
    };

    fetchEntries();
  }, []);

  const getEntriesByDate = async (e) => {
    e.preventDefault();
    try {
      setEntries([]);
      console.log(date);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/entries/${date}`
      );
      const body = await res.json();
      console.log(res);

      if (res.ok) {
        setEntries(body.data);
      } else {
        throw new Error(body.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section>
      <h2>Enlaces</h2>
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
    </section>
  );
};

export default EntriesPage;
