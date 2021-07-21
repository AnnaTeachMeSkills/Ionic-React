import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react';


import { IonButton, IonIcon, } from '@ionic/react';
import { star } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage className="App">
     <div className="ButtonBlock">
       <IonButton color="secondary" className="mainAPiButton" size="small" >Secondary</IonButton>
     </div>
    </IonPage>
  );
};

export default Home;
