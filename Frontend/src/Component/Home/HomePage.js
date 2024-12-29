import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import AuthContext from '../../Context/AuthContext';
import LoginPage from '../Login/LoginPage';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import { ThreeDots } from 'react-loader-spinner';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  
  const renderAllPage = () => {
    switch (isAuthenticated) {
      case null:
        return (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <ThreeDots color="#0b69ff" height={70} width={70} />
        </div>
        );
      case true:
        return(
        <>
         <Navbar />
         <Hero />
         <Features />
         <Footer />
         </>
        )
      case false:
        return <LoginPage />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderAllPage()}
      
    </>
  );
};

export default HomePage;
