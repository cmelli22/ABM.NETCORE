import { TextField, MenuItem , Button, Checkbox, FormControlLabel, Select} from "@mui/material"
import {Validate} from '../Helpers';
import {useState} from 'react';

const Form = ({personaProp, modificarProp, alta}) => {

    const [modificar, setModificar] = useState(Boolean(modificarProp)); 
    let persona= { };

    if( personaProp != null){
        persona.NombreCompleto = personaProp.nombreCompleto;
        persona.Identificacion = personaProp.identificacion;
        persona.Edad = personaProp.edad;
        persona.Genero = personaProp.genero;
        persona.Estado = personaProp.estado;
        persona.AtributosAdicionales = personaProp.atributosAdicionales; 
        persona.Maneja = personaProp.maneja;
        persona.UsaLentes= personaProp.usaLentes;
        persona.Diabetico= personaProp.diabetico;
        persona.PadeceEnfermedad= personaProp.padeceEnfermedad;
        persona.DescripcionEnfermedad = personaProp.descripcionEnfermedad;

    }

    const setPersona = (e) =>{
        console.log(e)
      

        switch(e.target.name){
            case 'Nombre':
                persona.NombreCompleto = !modificar ? e.target.value.trim() : e.target.value.trim() + " " +String(persona.NombreCompleto).split(' ')[1];
                break;
            case 'Apellido':
                persona.NombreCompleto = !modificar? persona.NombreCompleto + " " + e.target.value.trim() : String(persona.NombreCompleto).split(' ')[0] + " " + e.target.value.trim();
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
                persona.DescripcionEnfermedad= e.target.value
                break;
        }
        console.log(persona)
    }

    const Guardar= async () => {
        if(Validate({...persona})){
            const requestOptions = {
                
                method: alta ? 'POST' : 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({...persona })
            };
            await fetch('https://localhost:44331/api/personas',requestOptions);
            window.location.href = '/Listar';
        }
        else{
            window.alert("debe completar todos los campos requeridos")
        }

    }
    return(
        <>
        {modificar ? (
            <div className="form-container">
            {Boolean(alta) ? (
            <h1><span>Alta de Persona</span></h1>
            ):
            (<h1><span>Modificacion de Persona</span></h1>)
            }
            <div className="Nombre">                    
                <TextField required className="form-input" onBlur={(e)=> {setPersona(e)}} color="primary" margin="normal" name="Nombre" label="Nombre" InputLabelProps={{ shrink: true }} />
                <TextField required className="form-input" color="primary" onBlur={(e)=> {setPersona(e)}} margin="normal" name="Apellido" label="Apellido" InputLabelProps={{ shrink: true }} />
            </div>
            <div >
                {Boolean(alta)?
                (
                    <TextField required className="largeInput" margin="normal" onBlur={(e)=> {setPersona(e)}} label="Identificacion" type={"number"} name="Identificacion" variant="outlined" color="primary" InputLabelProps={{ shrink: true }}/>
                ):
                (
                    <TextField required value={personaProp.identificacion} className="largeInput" margin="normal" onBlur={(e)=> {setPersona(e)}} label="Identificacion" type={"number"} name="Identificacion" variant="outlined" color="primary" InputLabelProps={{ shrink: true }}/>
                )

                }      
                <TextField required  className="shortInput" color="primary"  onBlur={(e)=> {setPersona(e)}} margin="normal" name="Edad" label="Edad"  type={"number"} variant="outlined" InputLabelProps={{ shrink: true }} />
            </div>
            <div >  
                <TextField color="primary" className="largeInput" onBlur={(e)=> {setPersona(e)}} margin="normal" name="AtributosAdicionales" label="Atributos Adicionales" variant="outlined" InputLabelProps={{ shrink: true }}/>
                <TextField color="primary" required className="shortInput" name="Genero" onChange={(e)=> {setPersona(e)}} select="true" margin="normal" label="Genero" variant="outlined" InputLabelProps={{ shrink: true }} >
                    <MenuItem value="F">Femenino</MenuItem>
                    <MenuItem value="M">Masculino</MenuItem>
                </TextField>    
            </div>
            <div className="container-estado">
                <div>
                    <FormControlLabel control={<Checkbox  name="Maneja" onChange={(e)=> {setPersona(e)}}/>} label="Maneja"  />
                    <FormControlLabel control={<Checkbox name="UsaLentes" onChange={(e)=> {setPersona(e)}} />} label="Usa Lentes" />
                    <FormControlLabel control={<Checkbox  name="Diabetico" onChange={(e)=> {setPersona(e)}} />} label="Diabetico" />
                    <FormControlLabel control={<Checkbox  name="PadeceEnfermedad" onChange={(e)=> {setPersona(e)}} />} label="Padece Enfermedad" />
                </div>
                <div>
                    <TextField color="primary" className="largeInput" required name="Estado" onChange={(e)=> {setPersona(e)}} select="true" margin="normal" label="Estado" InputLabelProps={{ shrink: true }}  >
                        <MenuItem value={true}>Activo</MenuItem>
                        <MenuItem value={false}>No Activo</MenuItem>
                    </TextField>  
                </div> 
            </div>
            <div>
                <TextField margin="normal" value={personaProp.descripcionEnfermedad} name="DescripcionEnfermedad" fullWidth={true} onChange={(e)=> {setPersona(e)}} label="Enfermedad que padece" color="primary" variant="outlined"/>
            </div>
            <button type="submit" className="btn btn-primary button" onClick={Guardar}>Guardar</button>
        </div> 
        ) :(

            <div className="form-container">
                <h1><span>Modificacion de Persona</span></h1>
                <div className="Nombre">                    
                    <TextField required value={String(personaProp.nombreCompleto).split(' ')[0]} className="form-input" onBlur={(e)=> {setPersona(e)}} color="primary" margin="normal" name="Nombre" label="Nombre" variant="outlined"  InputLabelProps={{ shrink: true }}/>
                    <TextField required value={String(personaProp.nombreCompleto).split(' ')[1]} className="form-input" color="primary" onBlur={(e)=> {setPersona(e)}} margin="normal" name="Apellido" label="Apellido"  InputLabelProps={{ shrink: true }} />
                </div>
                <div >
                    <TextField required value={personaProp.identificacion} className="largeInput" margin="normal" onBlur={(e)=> {setPersona(e)}} label="Identificacion" type={"number"} name="Identificacion" variant="outlined" color="primary"  InputLabelProps={{ shrink: true }}/>
                    <TextField required value={personaProp.edad}  className="shortInput" color="primary"  onBlur={(e)=> {setPersona(e)}} margin="normal" name="Edad" label="Edad"  type={"number"} variant="outlined"  InputLabelProps={{ shrink: true }} />
                </div>
                <div >  
                    <TextField color="primary" value={personaProp.atributosAdicionales}  className="largeInput" onBlur={(e)=> {setPersona(e)}} margin="normal" name="AtributosAdicionales" label="Atributos Adicionales" variant="outlined"  InputLabelProps={{ shrink: true }}/>
                    <TextField color="primary" value={personaProp.genero} selected={personaProp.genero} required className="shortInput" name="Genero" onChange={(e)=> {setPersona(e)}} select="true" margin="normal" label="Genero" variant="outlined" InputLabelProps={{ shrink: true }} >
                        <MenuItem value="F">Femenino</MenuItem>
                        <MenuItem value="M">Masculino</MenuItem>
                    </TextField>    
                </div>
                <div className="container-estado">
                    <div>
                        <FormControlLabel  control={<Checkbox checked={Boolean(personaProp.maneja)}  name="Maneja" onChange={(e)=> {setPersona(e)}}/>} label="Maneja"  />
                        <FormControlLabel  control={<Checkbox  checked={Boolean(personaProp.usaLentes)}   name="UsaLentes" onChange={(e)=> {setPersona(e)}} />} label="Usa Lentes" />
                        <FormControlLabel  control={<Checkbox checked={Boolean(personaProp.diabetico)}   name="Diabetico" onChange={(e)=> {setPersona(e)}} />} label="Diabetico" />
                        <FormControlLabel  control={<Checkbox checked={Boolean(personaProp.padeceEnfermedad)}  name="PadeceEnfermedad" onChange={(e)=> {setPersona(e)}} />} label="Padece Enfermedad" />
                    </div>
                    <div>
                        <TextField color="primary" selecte={personaProp.estado}  className="largeInput" required name="Estado" onChange={(e)=> {setPersona(e)}} select="true" margin="normal" label="Estado"  >
                            <MenuItem value={true}>Activo</MenuItem>
                            <MenuItem value={false}>No Activo</MenuItem>
                        </TextField>  
                    </div> 
                </div>
                <div>
                    <TextField margin="normal" name="DescripcionEnfermedad" onChange={(e)=> {setPersona(e)}} fullWidth={true} label="Enfermedad que padece" color="primary" variant="outlined"  InputLabelProps={{ shrink: true }}/>
                </div>
                <div className="botonera">
                    <button type="submit" className="btn btn-danger button" onClick={() => setModificar(true)}>Modificar</button>
                    <button type="submit" className="btn btn-primary button" onClick={Guardar}>Guardar</button>
                </div>
      
            </div>
        ) }

        </>
    )
}

export default Form;