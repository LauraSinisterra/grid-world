import "./styles.css";
import React, {useState} from "react";
import img1 from "./assets/img-1.png"
import img2 from "./assets/img-2.png"
import img3 from "./assets/img-3.png"
import img4 from "./assets/img-4.png"

const images = [img1, img2, img3, img4]

const Loading = ({calcWidth}) => (
  <aside>
    <div className="loading-bar"></div>
    <label htmlFor="images-loaded">Loading...</label>
    <progress id="images-loaded" max="100" value={calcWidth}></progress>
  </aside>
)

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);
  
  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => 
      currentImage < length ? currentImage + 1 : 0
    )
  }

const handleImageLoad = () => {
  setNumLoaded((numLoaded) => numLoaded + 1);
} 

  return (
  <section>
     <header>
      <h1>
          grid<i>world</i>
        </h1>
        <h2>
        <i>Active Creativity</i> project
          <br /> for learning React
        </h2>
        <div className="links">
        <a href="https://github.com/LauraSinisterra/grid-world" target={"_blank"}>
          source
        </a>
        <a href="https://laurasinisterra.com" target={"_blank"}>
          made by Laura Sinisterra
        </a>
        </div>
    </header>
    <figure>
      {numLoaded < images.length && (<Loading calcWidth={(numLoaded / images.length) * 100}/>)}
    <figcaption>{currentImage + 1} / {images.length}</figcaption>
    {images.map((imageURL, index) => (
      <img key={imageURL} src={imageURL} onClick={handleClick} onLoad={handleImageLoad} className={currentImage === index ? "display" : "hide"}/>
    ))}
    </figure>
  </section>
  );
};

export default App;
