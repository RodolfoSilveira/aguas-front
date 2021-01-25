import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '../../components/Menu';
import Hero from '../../components/Hero';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Modal from '../../components/ModalRegister';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ToastContainer autoClose={4000} />
      <header>
        <Menu />
        {
          open && <Modal onClose={closeModal} />
        }
        <Hero />
      </header>
      <main>
        <Main openModal={openModal} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
