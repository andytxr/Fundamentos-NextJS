import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function User(){

    let router = useRouter()

    return(

        <Layout title="Navegação Dinâmica">
            <div>
                <span>Código da Navegação Dinâmica: {router.query.code} -</span>
                <span>- Usuário veio de {router.query.from}</span>
            </div>
            
        </Layout>
    )

}