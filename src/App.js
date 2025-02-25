import { useState, useEffect } from 'react';
import Header from "./components/Header";
import { Outlet } from "react-router";
import userContext from "./utils/userContaxt";
import { Provider } from 'react-redux';
import appStore from './store/appStore';

const App = () => {
  const [userName, setUserName]= useState()
useEffect(()=>{
  const data = {
  name:'sunil pawar'
  }
  setUserName(data.name)
},[])
  return (
    // <userContext.Provider value={{loggedInUser:userName}}>
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser:userName,setUserName}}>
     <div className="app">
      <Header />
      <div className="mt-24">

     <Outlet />
      </div>
    </div>
    </userContext.Provider>
    </Provider>
   
  );
};

export default App;
