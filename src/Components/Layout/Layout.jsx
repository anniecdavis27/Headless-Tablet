import Header from "./Header/Header";
import Footer from "./Footer/Footer";

//This component sets the layout for global components that persist throughout all of the pages.(header/footer)

const Layout = (props) => (
  <div>
    <Header />
        {props.children}
    <Footer />
  </div>
);

export default Layout;