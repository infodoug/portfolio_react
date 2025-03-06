import styles from "./Projeto.module.css";
import cintTitle from "../img/cint-title.png";
import cintScreen1 from "../img/cint-screen-1.png";

function Projeto({backgroundComponent, descriptionComponent}) {
    return (
        <div className={styles.backgroundComponent}>
            {backgroundComponent}
            <div className={styles.descriptionComponent}>
                {descriptionComponent}
            </div>
        </div>
    )
}


function CintBackground() {
    return (
        <div className={styles.cintBackground}>
            <div className={styles.cintTitle}>
                <img src={cintTitle} alt="Falha ao carregar imagem" />
            </div>

            <div className={styles.cintScreens}>
                <img src={cintScreen1} alt="Falha ao carregar imagem" />
            </div>
        </div>
    )
}

export { Projeto, CintBackground };
