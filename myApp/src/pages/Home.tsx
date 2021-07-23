import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React, { useEffect,useState } from 'react';


import { IonButton, IonIcon, } from '@ionic/react';
import { render } from '@testing-library/react';
import Apipage from './Apipage'


const Home: React.FC = () => {

   return (
  <div className="choose_button">Click to button Fetch DATA!
  </div>
   );
};

export default Home;
