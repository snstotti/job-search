import './App.css';
import React from 'react'
import Intro from './component/Intro/Intro'
import Header from './component/Header/Header'
import Categories from './component/Categories/Categories';
import SubscribeBlock from './component/SubscribeBlock/SubscribeBlock';
import Footer from './component/Footer/Footer';

export default function App() {
  return (
    <div className="">
      <Header />
      <Intro />
      <Categories />
      <SubscribeBlock />
      <Footer />
    </div>
  );
}
