import React, { createElement } from 'react';
import { IonList, IonItem, IonLabel, IonInput,IonPage, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { useEffect,useState } from 'react';
import { render } from '@testing-library/react';

 const Apipage:  React.FC =  () =>  {

    const [state, setState] = useState({});

     useEffect(  () => {
        console.log("hello")
        async function getData() {
            let response = await fetch('https://anapioficeandfire.com/api/characters/1');
            let result= await response.json()
            console.log(result);
            setState(result);
        }
        getData()
    }, [])

    console.log(state)
    let array:string[] = Object.values(state)
    console.log(array)
    console.log(array[0])
      return (
        <IonPage>
            <IonList>
                <IonItem>
                    <IonLabel>{array[0]}</IonLabel>
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



// array = Object.values(result)
        // console.log(array)
        // for(let el in result){
        // //     console.log(el)
        // //    console.log(array)
        // //    array.push(el)
        // //    console.log(array)

        // }