import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Craft2 from "./HomePage/Craft2/Craft2";
import Premium1 from "./HomePage/Premium1/Premium1";
import Catalog from "./HomePage/Catalog3/Catalog3";
import Elite4 from "./HomePage/Elite4/Elite4";
import Testimonials from "./HomePage/Testimonials5/Testimonials5";
import TrustedBy5 from "./HomePage/TrustedBy5/TrustedBy5";
import Catalog1 from "./Products/Catalog1/Catalog1";
import Portfolio from "./Porfolio/Portfolio/Portfolio";

const Pages = () => {
  return (
    <div>
      < Header/>
      < Footer/>
      <Premium1/>
      <Craft2/>
      <Catalog/>
      <Elite4/>
      <Testimonials/>
      <TrustedBy5/>


      <Catalog1/>
      <Portfolio/>
    </div>
  )
}

export default Pages