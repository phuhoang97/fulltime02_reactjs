import "./App.css";
import DemoAxiosApi from "./components/DemoAxiosApi";
import DemoFetchApi from "./components/DemoFetchApi";

function App() {
  return (
    <div className='App'>
      <DemoFetchApi />
      <DemoAxiosApi />
    </div>
  );
}

export default App;
