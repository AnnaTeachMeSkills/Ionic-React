import React from 'react';
import { IonList, IonItem, IonLabel, IonInput,IonPage, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { useEffect,useState } from 'react';

const Apipage: React.FC = () => {



    useEffect(() => {
        fetch('https://anapioficeandfire.com/api/characters')
        .then(response => response.json())
        .then(data => console.log(data));
     });
    
      return (
        <IonPage>
            <IonList>
                <IonItem>
                    <IonLabel>Pokémon Yellow</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Mega Man X</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>The Legend of Zelda</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Pac-Man</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Super Mario World</IonLabel>
                </IonItem>
            </IonList>

        </IonPage>
      );
    };


export default Apipage;