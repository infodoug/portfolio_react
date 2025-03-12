import styles from "./Tecnologias.module.css";
import imgHtml from "../img/tecs/html.png";
import imgReact from "../img/tecs/react.png";
import imgFigma from "../img/tecs/figma.png";
import imgFlutter from "../img/tecs/flutter.png";
import imgMysql from "../img/tecs/mysql.png";
import imgPhp from "../img/tecs/php.png";

function DivTecnologias() {
    return (
        <div className={styles.divTecnologias}>
            <p>Tecnologias que tenho conhecimento:</p>
            <div className={styles.containerTecs}>
                <CardTecnologia imagem={imgHtml} nome={"HTML, CSS e Javascript"}/>
                <CardTecnologia imagem={imgReact} nome={"React.js"}/>
                <CardTecnologia imagem={imgFigma} nome={"Figma"}/>
                <CardTecnologia imagem={imgFlutter} nome={"Flutter"}/>
                <CardTecnologia imagem={imgMysql} nome={"MySQL"}/>
                <CardTecnologia imagem={imgPhp} nome={"PHP"}/>
            </div>
        </div>
    )
}

function CardTecnologia({imagem, nome}) {
    return (
        <div className={styles.cardTecnologia}>
            <img src={imagem}/>
            <p> {nome} </p>
        </div>
    )
}

export {DivTecnologias};