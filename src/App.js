import React from "react"

import UserContext from './contexts/UserContext'
import { pessoas } from './PESSOAS'
import ListUsuarios from './components/ui/ListUsuarios'

const App = () => {
  return (
    <UserContext.Provider value={pessoas}>
      <div className="App">
        <ListUsuarios />
      </div>
    </UserContext.Provider>
  );
}

export default App;
