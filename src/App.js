// import React from 'react';
// import{Routes ,Route} from 'react-router-dom';
// import Home from './Component/Home';
// import About from './Component/About';
// import Services from './Component/Services';
// import Contact from './Component/Contact';
// import Error from './Component/Error';

// const App = () => {
//   return (
//     <Routes>
//       <Route  exact path="/" component= {Home} />
//       <Route path="About" component= {About} />
//       <Route path="Services" component= {Services} />
//       <Route path="Contact" component= {Contact} />
//       <Route component={Error} />
//     </Routes>
//   )
// }

// export default App ;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
    <List/>
<Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  <Route  element={<Error />} />
</Routes>
<Footer />
    </>
  );
};

export default App;
