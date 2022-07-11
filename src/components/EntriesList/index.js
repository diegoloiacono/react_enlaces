import List from "../List";
import Entry from "../Entry";
import EntryInfo from "../EntryInfo";
import Button from "../Button";

const EntriesList = ({ entries, canEdit }) => {
  return (
    <List
      data={entries}
      render={(entry) => (
        <li key={entry.id}>
          <EntryInfo entry={entry} />
          {canEdit && (
            <>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </>
          )}
        </li>
      )}
    />
  );
};

export default EntriesList;
