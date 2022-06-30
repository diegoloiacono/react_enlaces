const Entry = ({ entry }) => {
  const { title, description, url } = entry;
  return (
    <article>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <a href={url} target="_blank">
        {url}
      </a>
    </article>
  );
};

export default Entry;
