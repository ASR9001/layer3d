import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import WelcomeScreen from './components/WelcomeScreen';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/contact';
import Cart from './pages/Cart';
import SignupPage from './pages/SignupPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && <WelcomeScreen onFinish={() => setShowWelcome(false)} />}
      {!showWelcome && (
        <>
          <Router>
            <AuthProvider>

              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/checkout" element={<Checkout />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignupPage />} />
              </Routes>
              <Footer></Footer>
            </AuthProvider>

          </Router>
        </>
      )}
    </>
  )
}

export default App