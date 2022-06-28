import { useState , useEffect} from "react";
import PersonaList from './PersonaList';
import { Link } from "react-router-dom";
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
                <div className="botonera">
                    <Link to ={"/"}>
                        <button className="btn btn-danger">Volver</button>
                    </Link>
                    <Link to ={"/Alta"}>
                        <button className="btn btn-primary">Alta</button>
                    </Link>
                </div>

            </div>
        </>
    )

}

export default PersonaListContainer;