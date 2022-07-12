import List from "../List";
import EntryInfo from "../EntryInfo";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./style.css";

const EntriesList = ({ entries, canEdit }) => {
  return (
    <List
      data={entries}
      render={(entry) => (
        <li key={entry.id}>
          <EntryInfo entry={entry} />
          {canEdit && (
            <>
              <div className="profile-buttons">
                <Link
                  to={`/entries/${entry.id} `}
                  state={{ initialEntry: entry }}
                >
                  <Button className="edit-button">Edit</Button>
                </Link>
                <Link to={`/delete/entries/${entry.id} `}>
                  <Button className="delete-button">Delete</Button>
                </Link>
              </div>
            </>
          )}
        </li>
      )}
    />
  );
};

export default EntriesList;
