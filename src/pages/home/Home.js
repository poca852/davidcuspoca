import React from 'react';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
import InforSection from '../../components/infoSection/InforSection';

const Home = () => {
  return (
    <>
     <InforSection {...homeObjOne} />
    </>
  )
}

export default Home