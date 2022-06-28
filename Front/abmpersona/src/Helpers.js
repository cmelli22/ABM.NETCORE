const IsNull = (value) => {
    return (!value || value === undefined || value === "" || value.length === 0);
}

export const Validate = (pers) =>{
    var a = !(IsNull(pers.NombreCompleto) || IsNull(pers.Identificacion) 
    || IsNull(pers.Edad) || IsNull(pers.Genero) || IsNull(pers.Estado));
   return a;
}