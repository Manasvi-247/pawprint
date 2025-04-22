import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { SearchData } from "./SearchData";
import { DogComponent } from "../components/DogComponent";

export const DogContext = createContext();

export function DogData(){
    const [data , setdata] = useState();
    const[err , seterr] = useState();
    
    const dog = useContext(SearchData);

    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/dogs' , {
            headers : {
                'X-Api-Key' : '/2y/qY3OmNrskZxr2uxvyA==X2Nb8xHB6wE4LDpA'
            } , 
            params : {
                'name' : `${dog}`
            }
        }).then((res) => {
            setdata(res.data);
            console.log(res.data);
        }).catch((err) => {
            seterr(err.data);
            console.log(err.data);
        })
    },[dog])

    return(
        <>
         <DogContext.Provider value={data}>
           <DogComponent></DogComponent>
         </DogContext.Provider>
        </>
    );
}