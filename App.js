import {useState, useEffect} from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Main from "pages/Main";
import Blog from "pages/Blog";
import Post from "pages/Post";
import Partnyor from "pages/Partnyor";
import Analitika from "pages/Analitika";
import PodKlyuch from "pages/PodKlyuch";
import Zemlya from 'pages/Zemlya';
import Strategii from 'pages/Strategii';
import Personal from 'pages/Personal';
import Komanda from 'pages/Komanda';
import Avtomatizachia from 'pages/Avtomatizachia';
import Anticrisis from "./pages/Anticrisis";
import CreateProduct from 'pages/CreateProduct';
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import "./App.scss";
import {EffectCoverflow} from "swiper";





function App() {

  const [loading, setLoading] = useState(false);
  useEffect (() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    }, []);

  const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const Layout = () => {
      return  (
          <>
          <Header />
            <Outlet />
          <Footer />
          </>
      )
  }

  return (
    <>
      <div className={'wrap'}>
        <div className="b-go" style={{backgroundPosition: `left 50px top ${60 - offsetY / 10}px`}} />
        {loading? (<div className={'loader'}>
          <div className={'loader__spinner'}></div>
        </div>) : (
        <Routes>
          <Route element={<Layout />} >
          <Route path="/" element={<Main offsetY={offsetY} />} />
          <Route path="pod-klyuch" element={<PodKlyuch offsetY={offsetY} />} />
          <Route path="blog" element={<Blog offsetY={offsetY} />}>
          </Route>
          <Route path="blog/:id" element={<Post offsetY={offsetY}/>} />
          <Route path="zemlya" element={<Zemlya offsetY={offsetY} />} />
          <Route path="anticrisis" element={<Anticrisis offsetY={offsetY} /> } />}
          <Route path="partnyor" element={<Partnyor offsetY={offsetY} />} />
          <Route path="personal" element={<Personal offsetY={offsetY} />} />
          <Route path="strategii" element={<Strategii offsetY={offsetY} />} />
          <Route path="komanda" element={<Komanda offsetY={offsetY} />} />
          <Route path="analitika" element={<Analitika offsetY={offsetY} />} />
          <Route path="avtomatizaciya" element={<Avtomatizachia offsetY={offsetY} />} />
          <Route path="produkt" element={<CreateProduct offsetY={offsetY} />} />
          <Route path="contact" element={<Contacts offsetY={offsetY} /> } />
          <Route path="shop" element={<Shop offsetY={offsetY}/>} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        )}
    </div>
    </>
  );
}

export default App;
