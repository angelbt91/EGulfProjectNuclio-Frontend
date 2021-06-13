import './tabheader.css'

function Rosificacion(event){
    event.target.style.color = '#DA4167';
    event.target.style.borderBottom = "4px solid #DA4167";
}

function Blackificacion(event){
    event.target.style.color = '#798591';
    event.target.style.borderBottom = "0px";
}

const TabHeader = () => {

    const optionsArray = ["PORTADA","FAVORITOS","CASA Y JARDIN","MODA","MOTOR","COLECCIONISMO","OFERTAS"];
    return(
        <div className = "_tabheadContainer">
            {optionsArray.map((option)=> {
                return (
                    <div class="tab" onMouseEnter={Rosificacion} onMouseLeave={Blackificacion}>{option}</div>
                )
            })}
        </div>
    )
}


export default TabHeader;
