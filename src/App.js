import logo from './logo.svg';
import "./App.css";
import photo from "./imageInPublic.jpg";
import image from "./imageInSrc.jpg";
import myvideo from "./myvideo.mp4";

function App() {
  return (
    <div className='App'>
      <div style={{ border: 'solid 1px black max-width:100vw' }}> 
        <h1 className="title red">My forum </h1>
        <br />
        <img src={image} alt="imageInSrc" />
        <br />
        <img src={photo} alt="imageInPublic"/>
        </div>
        <video width="320" height="240" controls>
           <source src={myvideo} type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
