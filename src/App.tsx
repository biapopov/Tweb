import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { MY_Layout } from './components/MY_Layout';
import { useRootStore } from '.';



function App() {

  const rootStore = useRootStore()

  useEffect(() => {
      rootStore.setInitialStorageContents()
  }, [])


  return (
    <div className="App">
      <MY_Layout/>
    </div>
  );
}

export default App;