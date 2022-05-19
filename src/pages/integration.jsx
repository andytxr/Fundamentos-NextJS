import Layout from "../components/Layout"
import { useState } from 'react';

export default function Integration(){

    let [user, setUser] = useState({});
    let [code, setCode] = useState(0);

    let url = `http://localhost:3000/api/users/${code}`;

    /*function f(){

        fetch(url).then(resp=>resp.json()).then(data=>setUser(data));

    }*/
    
    async function f(){

        let resp = await fetch(url);
        let data = await resp.json();

        setUser(data);

    }

    return(
        
        <Layout>
            <div>
                <input type="number" value={code} onChange={e=>setCode(e.target.value)}></input>
                <button onClick={f}>Obter dados</button>
            </div>
            <ul>
                <li>Code: {code}</li>
                <li>ID: {user.id}</li>
                <li>Name: {user.name}</li>
            </ul>

        </Layout>
        


    )

}