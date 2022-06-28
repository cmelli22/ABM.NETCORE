import Form from '../Form';
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom"
const PersonaDetailContainer = () =>{

    const { id } = useParams()
    let  [persona, setPersona] = useState({});


    useEffect(()=>{
        
     getApiData();
    },[id])

    const getApiData = async () => {
        
        const response = await fetch(
          "https://localhost:44331/api/personas/"+id
        ).then((response) => response.json());
        
        setPersona(response);
      };
    
    return(
        <>
        <Form personaProp = {persona} modificar = {false} alta= {false} ></Form>
        </>
    )
}

export default PersonaDetailContainer;