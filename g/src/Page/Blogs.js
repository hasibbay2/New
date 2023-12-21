// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Blogs() {
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

//   return (
//     <div>
//       Blog
//       {data.map((itm,key)=>
//       <h3 key={key}>{itm.name.common}
//         <button>
//           <Link state={<><h2>{itm.name.common}</h2></>} to={itm.name.common}>more detiles</Link>
//         </button>
//       </h3>)}
//     </div>
//   );
// }

// export default Blogs;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <h2>Blogs</h2>
      {data.map(
        (
          {
            name,
            capital,
            flags,
            maps,
            region,
            subregion,
            timezones,
            currencies,
          },
          key,
        ) => (
          <div className="div" key={key}>
            <img src={flags.png} />
            <h3 className="h3">{name.common}</h3>
            {console.log(capital)}
            <button className="button">
              {/* { {name,capital}=itm} */}
              <Link
                to={name.common}
                state={{
                  name,
                  capital,
                  flags,
                  maps,
                  region,
                  subregion,
                  timezones,
                  currencies,
                }}
              >
                More Details
              </Link>
            </button>
          </div>
        ),
      )}
    </div>
  );
}

export default Blogs;
