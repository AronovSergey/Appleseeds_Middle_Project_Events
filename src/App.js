import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://app.ticketmaster.com/discovery/v2/attractions.json?countryCode=US&apikey=dfSMiM1GWXpHvux6lF6TwpbPQABsWHr0')

      console.log(data)
    })();
  }, [])

  return (
    <div >
      app
    </div>
  );
}

export default App;
