
import './App.css';
import myWonderfulImage from "./imageInSrc.jpg"

function App() {
  return (
    
    <div className="App">
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Soulayma</h1>
    <br />
    <img src="/imageInPublic.jpg" alt="myimage" />

    <br />
    
    <img src={myWonderfulImage} alt="myimage" />
   
  </div>
  <video width={620} height={540} controls>

    <source  src="video.mp4" type="video/mp4"/>
    
  </video>

</div>
  );
  }

export default App;
