import React, { createElement } from 'react';
import { IonList, IonItem, IonLabel, IonInput,IonPage, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { useEffect,useState } from 'react';
import { render } from '@testing-library/react';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

 const Apipage:  React.FC =  () =>  {

    const [state, setState] = useState({});
    const [quote,setQuote] =useState()

     useEffect(  () => {
        async function getData() {
            let response = await fetch('http://www.boredapi.com/api/activity');
            console.log(response)
            let result= await response.json()
            console.log(result);
            setState(result);
        }
        getData()
    }, [])

    useEffect(() => {
        let array:string[] = Object.values(state)
        let quoteItem: any = array[0];
        const item =() => {
            setQuote(quoteItem)
            console.log(quote)
        return quote
        }
    item();
    },[state])
        
      return (
        <IonPage>
            <IonList>
                <IonItem >
                    <IonLabel>{quote}</IonLabel>
                </IonItem>
            </IonList>

        </IonPage>
      );
    };


export default Apipage;

