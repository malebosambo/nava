import React from 'React';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="Main_Content">
        <div className="Harvest">
          <h1>Harvesting Life</h1>
          <p>We grow a great variety of vegetables and herbs for your kitchen and outdoor cooking.</p>
        </div>
        <div className="Product">
          <h2>Organic Okra</h2>
          <img src="./okra.jpg" alt="okra" />
          <p className="Bold">R50.00/kg</p>
        </div>
        <div className="Sustainable">
          <h2>Driven by sustainability</h2>
          <p>We use sustainability farming methodology to make a positive contribution to the environment.</p>
          <p className="Border"><a href="https://sdgs.un.org/goals">Learn about SDGs</a></p>
        </div>
        <div><img src="./health.jpg" alt="health products"/></div>
        <div className="Health">
          <h1>Healthy Living</h1>
          <p>Use our health products to help you enjoy life more and make you worry less about visits to the doctor.</p>
          <div className="Health_Item"><img src="./brain.png" alt="brain wellness"/><p>Brain Wellness</p></div>
          <div className="Health_Item"><img src="./heart.png" alt="heart wellness"/><p>Heart Wellness</p></div>
          <div className="Health_Item"><img src="./kidney.png" alt="kidney wellness"/><p>Kidney Wellness</p></div>
          <div className="Health_Item"><img src="./intestine.png" alt="intestine wellness"/><p>Intestine Wellness</p></div>
        </div>
        <div className="Recipe">
          <h3>Weekly Recipe</h3>
          <hr />
          <img src="./pizza.jpeg" alt="vegan pizza" />
          <h2>Matso Base Vegan Pizza</h2>
          <input type="submit" value="Get Recipe" />
        </div>
        <div className="Contact">
          <h1>Contact Us</h1>
          <p>Cell:<br/> <a href="tel:+27670537445">+27670537445</a></p>
          <p>E-mail:<br/> <a href="mailto:manyeletis@gmail.com">manyeletis@gmail.com</a></p>
          <p>Address:<br/> 462 Cuba Crescent, Lulekani, 1392</p>
        </div>
      </div>
      <div className="Footer">
        <p>© 2023, Navah Harvest & Health</p>
      </div>
    </div>
  );
}

export default App;
