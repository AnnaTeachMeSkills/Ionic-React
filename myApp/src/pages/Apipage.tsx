import React, { createElement } from 'react';
import { IonList, IonItem, IonLabel, IonInput,IonPage, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonThumbnail, IonImg } from '@ionic/react';
import { useEffect,useState } from 'react';
import { render } from '@testing-library/react';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import './Apipage.css'

 const Apipage:  React.FC =  () =>  {

    const [state, setState] = useState({});

     useEffect(  () => {
        async function getData() {
            let response = await fetch('https://www.breakingbadapi.com/api/characters');
            let result= await response.json()
            setState(result);
        }
        getData()
    }, [])
    
    let  Item:string[] = Object.values(state);
        
      return (
        <IonContent className="IonContent" >
      <IonList>
        {Item.map((a:any) =>  (
          <IonItem key={a}>
            <IonThumbnail slot="start">
              <IonImg src = {a.img} />
            </IonThumbnail>
              <IonLabel>{a.name}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
    );
};


export default Apipage;



  
 