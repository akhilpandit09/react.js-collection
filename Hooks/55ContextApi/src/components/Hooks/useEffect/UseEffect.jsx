import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { useEffect } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);

    //no dependency
    // useEffect(()=>{
    //     document.title = count;
    // })

    //An empty dependency
    // useEffect(()=>{
    //     document.title = count;
    // },[])
    

    //props or state values
    useEffect(()=>{
        document.title = count;
    },[count])

    
  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={() => setCount(count+1)}>
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button onClick={() => (count === 0) ? setCount(0) : setCount(count - 1)}>
          <FaMinus className="icon" />
          </button>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;
   


export default UseEffect
