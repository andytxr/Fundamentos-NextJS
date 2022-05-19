import Layout from "../components/Layout";

export default function JSX(){

    let a = 5;
    let b = 3;

    let title = <h1>JSX é um conceito central</h1>

    function subtitle(){

        return <h2>{"mt legal".toUpperCase()}</h2>

    }

    return (

        <Layout>
            <div>
                {title}
                {subtitle()}
                <h3>{a * b}</h3>
            </div>
        </Layout>
        

    )

}