import List from "../List";
import Entry from "../Entry";

const EntriesList = ({ entries }) => {
  return (
    <List
      data={entries}
      render={(entry) => (
        <li key={entry.id}>
          <Entry entry={entry} />
        </li>
      )}
    />
  );
};

export default EntriesList;
