import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h3>Navah Harvest & Health</h3>
      </div>
      <div className="Main_Content">
        <div className="Harvest">
          <h2>Harvesting</h2>
          <p>Navah grows and produces vegetables and herbs at its farm for the agriculture market.</p>
        </div>
        <div className="Product">
          <h3>Organic Okra</h3>
          <img src="./okra.jpg" alt="okra" />
          <p className="Bold">R50.00/kg</p>
        </div>  
      </div>
      <div className="Footer">
        <p>© 2023, Navah Harvest & Health</p>
      </div>
    </div>
  );
}

export default App;
