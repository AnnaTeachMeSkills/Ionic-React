import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React, { useEffect,useState } from 'react';


import { IonButton, IonIcon, } from '@ionic/react';
import { render } from '@testing-library/react';
import Apipage from './Apipage'


const Home: React.FC = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
   if(open){
    console.log('yes')
   }
 });


   if(open){
      return <Apipage></Apipage>
   } else  return (
   <IonPage className="App">
   <div className="ButtonBlock">
     <IonButton color="secondary" className="mainAPiButton" size="small" onClick={() => {setOpen(true)}} >Secondary</IonButton>
   </div>
  </IonPage>
)
 

  // return (

  //   <IonPage className="App">
  //    <div className="ButtonBlock">
  //      <IonButton color="secondary" className="mainAPiButton" size="small" onClick={() => {setOpen(true)}} >Secondary</IonButton>
       
  //    </div>
  //   </IonPage>
  // );
};

export default Home;
