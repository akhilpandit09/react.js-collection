import './App.css'
import CompA from './components/CompA'
import { createContext } from 'react'

export const FirstName =  createContext();
export const LastName =  createContext();

function App() {

  return (
    <>
    <FirstName.Provider value={'Akhileshwar'}>
      <LastName.Provider value={'pandit'}>
    <CompA/>
    </LastName.Provider>
    </FirstName.Provider> 
    </>
  )
}

export default App
