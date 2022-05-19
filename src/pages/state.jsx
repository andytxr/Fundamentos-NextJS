import react, {useState} from 'react';
import Layout from './../components/Layout';

export default function State(){

    let [x, setX] = useState(0)

    function inc(){
        
        setX(x+1);

    }

    return(

        <Layout title="Componente com Estado">
            <div>
                <span>Valor: {x}</span>
                <button onClick={

                    e=>inc()

                }>+</button>
            </div>
        </Layout>

    )

}