import './Home.css';
import Header from "../../components/Header/Header";
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';


function Home() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
