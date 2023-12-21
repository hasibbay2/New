// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function Blog() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(data);
//   const aldata=useParams();

//   return (
//     <>
//     <div>
//       Blog
//       {aldata}
//       {/* {data.map((itm,key)=><h3 key={key}>{itm.name.common}</h3>)} */}
//     </div>

//     </>
//   );
// }

// export default Blog;

import { useLocation } from "react-router-dom";
import "./style.css";

function Blog() {
  const location = useLocation();
  // Access state from the location object

  console.log(location.state);
  const {
    name,
    capital,
    flags,
    maps,
    region,
    subregion,
    timezones,
    currencies,
  } = location.state;

  return (
    <>
      <div className="info-container">
        <h1>{"Country Name:" + name.common}</h1>
        <h3>{"Capital:" + capital}</h3>
        <div className="image-container">
          <img className="image-container" src={flags.png} alt={name.common} />

          <a style={{ textDecoration: "none" }} href={maps.openStreetMaps}>
            <img
              tar
              href={maps.openStreetMaps}
              src={maps.openStreetMaps}
              alt="map not available"
            />
          </a>
        </div>
        <p>{"Region:" + region}</p>
        <p>{"Subregion:" + subregion}</p>
        <p>{"timezones:" + timezones[0]}</p>
        <p>{"Currencies: " + Object.values(currencies)[0].name}</p>
        <p>{"Currencies symbol: " + Object.values(currencies)[0].symbol}</p>
      </div>
    </>
  );
}
export default Blog;
  );
}
export default Blog;
