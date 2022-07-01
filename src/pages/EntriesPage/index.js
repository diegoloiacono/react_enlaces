import { useState, useEffect } from "react";
import EntriesList from "../../components/EntriesList";

const EntriesPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/entries`);
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

  return (
    <section>
      <h2>Enlaces</h2>
      <EntriesList entries={entries} />
    </section>
  );
};

export default EntriesPage;
