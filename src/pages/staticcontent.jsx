import Layout from './../components/Layout';

export function getStaticProps(){

    return{

        props:{
            n: Math.random()
        }

    }
}

//Também posso usar uma função assíncrona ao usar getStaticProps

export default function StaticContent(props){

    return (

        <Layout title="Conteúdo Estático">
            <div>
                {props.n}
            </div>
        </Layout>

    )

}