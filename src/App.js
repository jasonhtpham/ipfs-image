import React from 'react';
import { AppRoutes } from './routes/routes';
import NavBar from './components/AppBar';


const App = () => {
  return (
    <div>
      <NavBar title="IPFS Image" />
      <AppRoutes />
    </div >
  )
}

export default App;
