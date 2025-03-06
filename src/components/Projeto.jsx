import styles from "./Projeto.module.css";

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
            aaa
        </div>
    )
}

export { Projeto, CintBackground };
