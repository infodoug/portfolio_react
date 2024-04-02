import styles from "./Card.module.css";

function Card({img, title, description, link}) {
    return (
        <div className={styles.cardContainer}>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <img className={styles.image} src={img} alt='Erro ao carregar imagem'/>
            </a>
            <div className={styles.text}>
                <div className={styles.title}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                
            </div>

        </div>
    )
}

export default Card;