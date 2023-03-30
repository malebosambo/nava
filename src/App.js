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
          <p>We grow a great variety of vegetables and herbs for the kitchen and outdoor cooking.</p>
        </div>
        <div className="Product">
          <h2>Organic Okra</h2>
          <img src="./okra.jpg" alt="okra" />
          <p className="Bold">R50.00/kg</p>
        </div>
        <div className="Sustainable">
          <h2>Driven by sustainability</h2>
          <p>We use sustainability farming methodology to make a positive contribution to the environment.</p>
          <p><a href="https://sdgs.un.org/goals">Learn about SDGs</a></p>
        </div>
        <div className="Health">
          <h1>Healthy Living</h1>
          <p>Use our health products to enjoy life more and worry less about visits to the doctor.</p>
        </div>
        <div className="Recipe">
          <h1>Weekly Recipe</h1>
          <h2>Matso-based Pizza</h2>
          <img src="./pizza.jpeg" alt="vegan pizza" />
          <input type="submit" value="Get Recipe" />
        </div>
        <div className="Contact">
          <h2>Contact Us</h2>
          <p>Cell: <a href="tel:+27670537445">+27670537445</a></p>
          <p>E-mail: <a href="mailto:manyeletis@gmail.com">manyeletis@gmail.com</a></p>
          <p>Address: 462 Cuba Crescent, Lulekani, 1392</p>
        </div>
      </div>
      <div className="Footer">
        <p>© 2023, Navah Harvest & Health</p>
      </div>
    </div>
  );
}

export default App;
