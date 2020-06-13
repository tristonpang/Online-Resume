import React from 'react';
import Header from '../../components/header/header';
import About from '../../components/about/about';
import Resume from '../../components/resume/resume';
import Portfolio from '../../components/portfolio/portfolio';
import Testimonials from '../../components/testimonials/testimonials';
import ContactUs from '../../components/contactus/contactus';
import Footer from '../../components/footer/footer';
import resumeData from '../../resumeData';

const Home = () => {
  return (
    <div>
      <Header resumeData={resumeData} />
      <About />
      <Resume />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;