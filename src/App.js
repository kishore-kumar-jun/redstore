import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { Navbar } from "./Navbar";


function App() {
 
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <Aside />
     
      <Footer />
      
    </div>
  );
}

export default App;
