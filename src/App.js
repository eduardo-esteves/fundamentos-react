import Titulo from "./components/ui/TItulo"
import Contador from "./components/ui/Contador"


const App = () => {
  return (
    <div className="App">
      <Titulo titulo="Hello ReactJS" aligin="center"/>
      <Contador />
    </div>
  );
}

export default App;
