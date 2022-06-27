import { TextField, MenuItem , Button, Checkbox, FormControlLabel, Select} from "@mui/material"
import {Validate} from '../Helpers';

const Form = () => {

    const persona= { };

    const setPersona = (e) =>{
        console.log(e)

        switch(e.target.name){
            case 'Nombre':
                persona.NombreCompleto = e.target.value.trim()
                break;
            case 'Apellido':
                persona.NombreCompleto = persona.NombreCompleto + " " + e.target.value.trim()
                break;
            case 'Identificacion':
                persona.Identificacion = parseInt(e.target.value)
                break;
            case 'Edad':
                persona.Edad = parseInt(e.target.value)
                break;
            case 'Genero':
                persona.Genero= e.target.value
                break;
            case 'Estado':
                persona.Estado= e.target.value
                break;
            case 'AtributosAdicionales':
                persona.AtributosAdicionales= e.target.value.trim()
                break;
            case 'Maneja':
                persona.Maneja= Boolean(e.target.checked)
                break;
            case 'UsaLentes':
                persona.UsaLentes= Boolean(e.target.checked)
                break;
            case 'Diabetico':
                persona.Diabetico= Boolean(e.target.checked)
                break;
            case 'PadeceEnfermedad':
                persona.PadeceEnfermedad= Boolean(e.target.checked)
                break;
            case 'DescripcionEnfermedad':
                persona.DescricpcionEnfermedad= e.target.value
                break;
        }
        console.log(persona)
    }


    const Guardar= async () => {
        if(Validate({...persona})){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({...persona })
            };
            await fetch('https://localhost:44331/api/personas',requestOptions);
            window.location.href = '/';
        }
        else{
            window.alert("debe completar todos los campos requeridos")
        }

    }
    return(
        <>
            <div className="form-container">
                <h1><span>Alta de Persona</span></h1>
                <div className="Nombre">
                    <TextField required className="form-input" onBlur={(e)=> {setPersona(e)}} color="primary" margin="normal" name="Nombre" label="Nombre"  />
                    <TextField required className="form-input" color="primary" onBlur={(e)=> {setPersona(e)}} margin="normal" name="Apellido" label="Apellido" />
                </div>
                <div >
                    <TextField required className="largeInput" margin="normal" onBlur={(e)=> {setPersona(e)}} label="Identificacion" type={"number"} name="Identificacion" variant="outlined" color="primary"/>
                    <TextField required  className="shortInput" color="primary"  onBlur={(e)=> {setPersona(e)}} margin="normal" name="Edad" label="Edad"  type={"number"} variant="outlined" />
                </div>
                <div >  
                    <TextField color="primary" className="largeInput" onBlur={(e)=> {setPersona(e)}} margin="normal" name="AtributosAdicionales" label="Atributos Adicionales" variant="outlined" />
                    <TextField color="primary" required className="shortInput" name="Genero" onChange={(e)=> {setPersona(e)}} select="true" margin="normal" label="Genero" variant="outlined" >
                        <MenuItem value="F">Femenino</MenuItem>
                        <MenuItem value="M">Masculino</MenuItem>
                    </TextField>    
                </div>
                <div className="container-estado">
                    <div>
                        <FormControlLabel control={<Checkbox  name="Maneja" onChange={(e)=> {setPersona(e)}}/>} label="Maneja"  />
                        <FormControlLabel control={<Checkbox  name="UsaLentes" onChange={(e)=> {setPersona(e)}} />} label="Usa Lentes" />
                        <FormControlLabel control={<Checkbox  name="Diabetico" onChange={(e)=> {setPersona(e)}} />} label="Diabetico" />
                        <FormControlLabel control={<Checkbox  name="PadeceEnfermedad" onChange={(e)=> {setPersona(e)}} />} label="Padece Enfermedad" />
                    </div>
                    <div>
                        <TextField color="primary" className="largeInput" required name="Estado" onChange={(e)=> {setPersona(e)}} select="true" margin="normal" label="Estado"  >
                            <MenuItem value={true}>Activo</MenuItem>
                            <MenuItem value={false}>No Activo</MenuItem>
                        </TextField>  
                    </div> 
                </div>
                <div>
                    <TextField margin="normal" id="DescripcionEnfermedad" fullWidth={true} label="Enfermedad que padece" color="primary" variant="outlined"/>
                </div>
                <button type="submit" className="btn btn-primary button" onClick={Guardar}>Guardar</button>
            </div>
        </>
    )
}

export default Form;