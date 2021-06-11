import NavBar from "./components/Navbar";
import image from "./assets/img/cats_and_dogs.jpg";

function App() {
  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center">
        <img
          className="img-fluid"
          src={image}
          alt="I's raining cats and dogs"
        />
      </div>
    </>
  );
}

export default App;
