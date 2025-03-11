import styles from "./Projeto.module.css";
import cintTitle from "../img/cint-title.png";
import cintScreen1 from "../img/cint-screen-1.png";
import cintScreen2 from "../img/cint-screen-2.png";
import cintScreen3 from "../img/cint-screen-3.png";

function Projeto({backgroundComponent}) {
    return (
        <div className={styles.backgroundComponent}>
            {backgroundComponent}

        </div>
    )
}


function CintBackground({descriptionContainer, descriptionText}) {
    return (
        <div className={styles.cintBackground}>
            <div className={styles.cintTitle}>
                <img src={cintTitle} alt="Falha ao carregar imagem" />
            </div>

            <div className={styles.cintScreens}>
                <img src={cintScreen1} alt="Falha ao carregar imagem" />
                <img src={cintScreen2} alt="Falha ao carregar imagem" />
                <img src={cintScreen3} alt="Falha ao carregar imagem" />
            </div>

            <div className={styles.descriptionContainer}>

                    <div className={styles.descriptionComponent}>
                        <p>{descriptionText}</p>
                        <div className={styles.containerFerramentas}>
                                <DivFerramentas/>
                                <div className={styles.tagsF}>
                                    <TagFerramenta nome={"Dart"}/>
                                    <TagFerramenta nome={"Flutter"}/>
                                    <TagFerramenta nome={"Supabase"}/>
                                </div>

                        </div>
                    </div>
                
            </div>
            
            
        </div>
    )
}

function DivFerramentas() {
    return (
        <div className={styles.divFerramentas}>
            <p>Ferramentas utilizadas: </p>
            
        </div>
    )
}

function TagFerramenta({nome}) {
    return (
        <div className={styles.tagFerramenta}>
            <p>{nome}</p>
        </div>
    )
}

export { Projeto, CintBackground, DivFerramentas};
