import List from "../List";
import Entry from "../Entry";
import EntryInfo from "../EntryInfo";
import { Link } from "react-router-dom";

const EntriesList = ({ entries }) => {
  return (
    <List
      data={entries}
      render={(entry) => (
        <li key={entry.id}>
          {/* <Entry entry={entry} /> */}
          <Link to={`/entry/${entry.id}`}>
            <EntryInfo entry={entry} />
          </Link>
        </li>
      )}
    />
  );
};

export default EntriesList;
