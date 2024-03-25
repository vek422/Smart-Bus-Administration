import { useEffect } from "react";
import { useState } from "react";
import { BACKEND_BASE_URL } from "../service";

export default function useFetchUserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    console.log("running");
    try {
      setIsLoading(true);
      const res = await fetch(`${BACKEND_BASE_URL}/users/get`, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      });
      const resJson = await res.json();
      console.log("resjson", resJson);
      if (res.status == 200) {
        setUsers(resJson.data);
      } else {
        setError(resJson.message);
      }
    } catch (err) {
      setError("Some Error Has Occured");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchRecords,
    users,
    isLoading,
    error,
  };
}
