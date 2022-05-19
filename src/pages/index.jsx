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

            <Navigator destination="/fashionist" destinationName="Fashionista" color="blueviolet"></Navigator>
            <Navigator destination="/example" destinationName="Examplo" color="purple"></Navigator>
            <Navigator destination="/jsx" destinationName="JSX" color="violet"></Navigator>
            <Navigator destination="/user/santos/2301" destinationName="Navegação Dinâmica" color="blue"></Navigator>
            <Navigator destination="/state" destinationName="Componente com Estado" color="#2980e3"></Navigator>
            <Navigator destination="/integration" destinationName="Integração Back-End com Front-End" color="#195ca8"></Navigator>

        </div>

    )

}