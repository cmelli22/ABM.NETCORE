import { useState , useEffect} from "react"
import PersonaList from './PersonaList'
import {getApiData} from '../../api/get'

const PersonaListContainer = () => {

    let  [lista, setLista] = useState([])
    useEffect(()=>{
        getApiData();
    },[])

    const getApiData = async () => {
        const response = await fetch(
          "https://localhost:44331/api/personas"
        ).then((response) => response.json());
        
        setLista(response);
      };

    return (
        <>
            <div className="itemContainer">
                <h1>Personas</h1>
                <PersonaList personas={lista}/>
            </div>
        </>
    )

}

export default PersonaListContainer;