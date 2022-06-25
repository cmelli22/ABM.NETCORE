import { useState , useEffect} from "react"
import {Link} from 'react-router-dom'

const Persona = ({identificacion, NombreCompleto, Edad, Genero, Estado, AtributosAdicionales,Maneja,UsaLentes,Diabetico,PadeceEnfermedad,DescricpcionEnfermedad}) => {


    const borrarItem = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({         
                nombreCompleto: NombreCompleto,
                identificacion: identificacion,
                edad: Edad,
                genero: Genero,
                estado: Estado,
                atributosAdicionales: AtributosAdicionales,
                maneja: Maneja,
                usaLentes: UsaLentes,
                diabetico: Diabetico,
                padeceEnfermedad: PadeceEnfermedad,
                descricpcionEnfermedad: null
             })
        };
        await fetch('https://localhost:44331/api/personas',requestOptions);
        window.location.href = '/';
    } 

    return(
        <>
            <tr>
                <td>{identificacion}</td>
                <td>{NombreCompleto}</td>
                <td>{Edad}</td>
                <td>{Genero}</td>
                <td>{Estado}</td>
                <td>{AtributosAdicionales}</td>
                <td>{String(Maneja) }</td>
                <td>{UsaLentes}</td>
                <td>{Diabetico}</td>
                <td>{PadeceEnfermedad}</td>
                <td><button className="btn btn-danger" onClick={borrarItem} >Borrar</button></td>
                <td><Link to={`/persona/${identificacion}`}><button className="btn btn-primary" >Detalle</button></Link></td>
            </tr>
        </> 
    )
    
}

export default Persona