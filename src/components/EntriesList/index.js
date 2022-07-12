import List from "../List";
import EntryInfo from "../EntryInfo";
import Button from "../Button";
import { Link } from "react-router-dom";

const EntriesList = ({ entries, canEdit }) => {
  return (
    <List
      data={entries}
      render={(entry) => (
        <li key={entry.id}>
          <EntryInfo entry={entry} />
          {canEdit && (
            <>
              <Link
                to={`/entries/${entry.id} `}
                state={{ initialEntry: entry }}
              >
                <Button>Edit</Button>
              </Link>
              <Button>Delete</Button>
            </>
          )}
        </li>
      )}
    />
  );
};

export default EntriesList;
