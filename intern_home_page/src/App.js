
import './App.css';
import Footer from './Footer';
import MainContents from './MainContents';
import MainHeading from './MainHeading';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainHeading></MainHeading>
      <MainContents></MainContents>
      <div class="back"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
