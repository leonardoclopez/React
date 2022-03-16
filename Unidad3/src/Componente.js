import React,{Component} from "react";
import "./Componente.css";
import casco from './casco.png';

class Componente extends Component {
    render(){
        return(
        <div className="container1">
            
            <section><img src={casco} className='App-logo' alt='casco'/></section>
            <ul className='listado'>
                <li>Nombre: Casco Urbano.</li>
                <li>Descripcion: Casco Bluetooth con luces y audio</li>
                <li>Precio: $7500.- ARG</li>
                <li>SKU: 212322122</li>
                <li>Unidades disponibles: 10.-</li>
          </ul>
        </div>)
    }

}

export default Componente