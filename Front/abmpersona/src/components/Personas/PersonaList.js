import Persona from './Persona'

const PersonaList = ({personas}) => {

    return(
        <table className='table table-striped table-dark'>
             <thead className="thead-dark">
                <tr>
                    <th>DNI</th>
                    <th>Nombre Completo</th>
                    <th>Edad</th>
                    <th>Genero</th>
                    <th>Estado</th>
                    <th>Atributos</th>
                    <th>Maneja</th>
                    <th>Usa Lentes</th>
                    <th>Diabetico</th>
                    <th>Enfermo</th>
                    <th></th>
                    <th></th>
                </tr>
             </thead>
            <tbody>
                {
            personas.map((element, index) => {

                return (
                    <Persona  NombreCompleto= {element.nombreCompleto} identificacion= {element.identificacion} Edad = {element.edad} Genero= {element.genero} Estado= {element.estado} AtributosAdicionales= {element.atributosAdicionales} Maneja= {element.maneja} UsaLentes= {element.usaLentes} Diabetico= {element.diabetico} PadeceEnfermedad= {element.padeceEnfermedad} DescricpcionEnfermedad= {null}/>
                )
                })
                }
            </tbody>

        </table>

    )
}

export default PersonaList