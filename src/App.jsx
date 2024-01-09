import Header from "./components/header";
import Hero from "./components/hero";
import Linksection from "./components/linksection";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";

export default function App(){
  return(
      <div>
        <Header/>
        <Hero/>
        <Linksection/>
        <Dashboard/>
        <Footer/>
      </div>
  )
}