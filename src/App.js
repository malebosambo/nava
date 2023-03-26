import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h3>Navah Harvest & Health</h3>
      </div>
      <div className="Main_Content">
        <div className="Harvest">
          <h1>Harvesting</h1>
          <p>Navah grows and produces vegetables and herbs at its farm for the agriculture market.</p>
        </div>
        <div className="Product">
          <h2>Organic Okra</h2>
          <img src="./okra.jpg" alt="okra" />
          <p className="Bold">R50.00/kg</p>
        </div>
        <div className="Sustainable">
          <h2>Driven by sustainability</h2>
          <p>We use sustainability farming methodology to make a positive contribution to the environment.</p>
        </div>
        <div className="Health">
          <h1>Healthy Living</h1>
          <p>Live a life worthwhile with fewer sick days.</p>
      </div>
      <div className="Footer">
        <p>© 2023, Navah Harvest & Health</p>
      </div>
    </div>
  );
}

export default App;
