
import './App.css';
import Banner from './Components/Banner/Banner';
import Table from './Components/Table/Table';
import Taskbar from './Components/Taskbar/Taskbar';

function App() {
  return (
    <div className="App">
      <Taskbar />
      <Banner />
      <Table />
    </div>
  );
}

export default App;
