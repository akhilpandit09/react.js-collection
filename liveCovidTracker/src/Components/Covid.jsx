import React from 'react'
import { useEffect } from 'react'
import './Covid.css'
import { useState } from 'react'

function Covid() {

  const [data, setData] = useState([]);


    const getCovidData = async () =>{
        try {
          const URL ='https://data.covid19india.org/data.json';
          const response = await fetch(URL);
          const actualData = await response.json(); 
          console.log(actualData.statewise[0]);
          setData (actualData.statewise[0])
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        getCovidData();
      }, []);
   

  return (
    <>
    <h2 className='header'>COVID-19 CORONAVIRUS TRACKER</h2>

    <div className="card">
        <span>Our</span>
        <p>Country</p>
        <h2>India</h2>
    </div>
    <div className="card">
        <span>Total</span>
        <p>confirmed</p>
        <h4>{data.confirmed}</h4>
    </div>
    <div className="card">
        <span>Our</span>
        <p>deaths</p>
        <h4>{data.deaths}</h4>
    </div>

    <div className="card">
        <span>Our</span>
        <p>recovered</p>
        <h4>{data. recovered}</h4>
    </div>

    <div className="card">
        <span>Our</span>
        <p>lastupdatedtime</p>
        <h4>{data.lastupdatedtime}</h4>
    </div>
    

    </>
  )
}

export default Covid;
