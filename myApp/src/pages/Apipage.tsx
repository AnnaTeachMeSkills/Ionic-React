import React, { createElement } from 'react';
import { IonList, IonItem, IonLabel, IonInput,IonPage, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { useEffect,useState } from 'react';
import { render } from '@testing-library/react';

const Apipage: React.FC = () => {
    async function getData  ()  {
        let response = await fetch('https://anapioficeandfire.com/api/characters/1');
        console.log(response);
        let result= await response.json()
        console.log(result);
        for(let el in result){
            console.log(el)
        }
        return await result;
        
    } 

    getData()

      return (
        <IonPage>
            <IonList>
                <IonItem>
                    <IonLabel>sdf</IonLabel>
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