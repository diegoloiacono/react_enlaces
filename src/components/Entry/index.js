import { Link } from "react-router-dom";

const Entry = ({ entry }) => {
  const { title, description, url } = entry;
  return (
    <article>
      <Link to={`/entry/${entry.id}`}>
        <h2>{title}</h2>
      </Link>
      <h3>{description}</h3>
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </article>
  );
};

export default Entry;
