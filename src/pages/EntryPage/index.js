import { useParams } from "react-router-dom";

const EntryPage = () => {
  const [entry, setEntry] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/entries/${id}`, headers: { Authorization: `Bearer ${token}` });
        const body = await res.json();

        if (res.ok) {
          setEntry(body.data);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        alert(error.message);
      } 
    };

    fetchEntry();
  }, []);

  return { data };
};




  if (error) {
    return <ErrorMessage error={error} />;
  }

  return <section>{entry && <EntryWithImages entry={entry} />}</section>;
};

export default EntryPage;
