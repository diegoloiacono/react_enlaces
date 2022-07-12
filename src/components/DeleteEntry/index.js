import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const DeleteEntry = () => {
  const { id } = useParams();
  const { token } = useUserTokenContext();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteEntryById = async () => {
      try {
        await fetch(`${process.env.REACT_APP_API_URL}/entries/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("URL deleted!");
        navigate(`/profile`);
      } catch (error) {
        console.log(error.message);
      }
    };

    deleteEntryById();
  }, []);
};

export default DeleteEntry;
