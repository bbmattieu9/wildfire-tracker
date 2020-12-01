import Map from './components/Map'
import  { useState, useEffect } from 'react'

function App() {

  const [eventData, setEventData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {

    const fetchEvents = async () => {
      setLoader(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();
      setEventData(events);
      setLoader(false);
    }

    fetchEvents();

    console.log('[Events from NASA api]:', eventData);
  },)

  return (
    <div>
       { !loader ? <Map eventData={eventData} /> : <h1>Loading..</h1>}
    </div>
  );
}

export default App;
