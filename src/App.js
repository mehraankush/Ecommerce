import logo from './logo.svg';
import './App.css';
import { Header,Hero,Slider,Virtual,Products,Testimonilas,Footer } from './components'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonilas/>
      <Footer/>
    </div>
  );
}

export default App;
