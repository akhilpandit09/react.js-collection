import './App.css'
import CompA from './components/Hooks/contextAPI/CompA';
import { createContext } from 'react'

export const FirstName =  createContext();
export const LastName =  createContext();

const simple = () =>{
  return ( <p>Akhileshwar</p> )
}

function App() {

  return (
    <>
    <FirstName.Provider value={simple()}>
      <LastName.Provider value={'pandit'}>
    <CompA/>
    </LastName.Provider>
    </FirstName.Provider> 
    </>
  )
}

export default App
