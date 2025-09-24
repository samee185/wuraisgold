import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState({
    fetch: false,
    create: false,
    update: false,
    delete: false,
  });
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL;

  // Fetch events
  const fetchEvents = async () => {
    setLoading((prev) => ({ ...prev, fetch: true }));
    setError(null);

    try {
      const { data } = await axios.get(`${BASE_URL}/event`);
      
      setEvents(Array.isArray(data.data) ? data.data : []);
      // console.log(events);
      
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch events");
      // toast.error(err.response?.data?.message || "Failed to fetch events");
      setEvents([]); // fallback to empty array
    } finally {
      setLoading((prev) => ({ ...prev, fetch: false }));
    }
  };

  // Create event
 
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        loading,
        error,
        fetchEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

const useEvent = () => useContext(EventContext);

export default useEvent;
