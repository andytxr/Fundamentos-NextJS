import Navigator from "../components/Navigator"

export default function Home(){

    return (

        <div style={{

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
            listStyle: 'none'

        }}>

            <Navigator destination="/fashionist" destinationName="Fashionista"></Navigator>
            <Navigator destination="/example" destinationName="Examplo" color="purple"></Navigator>
            <Navigator destination="/jsx" destinationName="JSX"></Navigator>
            <Navigator destination="/user/santos/2301" destinationName="Navegação Dinâmica" color="gray"></Navigator>
            <Navigator destination="/state" destinationName="Componente com Estado"></Navigator>

        </div>

    )

}