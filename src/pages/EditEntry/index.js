import EditEntryForm from "../../components/EditEntryForm";
import { useLocation } from "react-router-dom";

const EditEntry = () => {
  const location = useLocation();
  const { initialEntry } = location.state;

  return (
    <section>
      <h2>Upload URL</h2>

      <EditEntryForm initialEntry={initialEntry} />
    </section>
  );
};

export default EditEntry;
