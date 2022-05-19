import Layout from '../components/Layout'
import styles from '../styles/Fashionist.module.css'

export default function Fashionist(){

    return (
        <Layout title="Estilo usando CSS Modules">
            
            <div className={styles.purple}>
                <p>CONTEÚDO!!!</p>
            </div>

        </Layout>
       

    )

}