import { WeatherApp } from "./components/WeatherApp";
import { WeatherProvider } from "./context/WeatherProvider";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <header><h1>Consultar el clima</h1></header>
        <WeatherApp />
      </WeatherProvider>
    </div>
  );
}

export default App;
