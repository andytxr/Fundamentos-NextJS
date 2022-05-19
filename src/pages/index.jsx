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

            <Navigator destination="/fashionist" destinationName="Fashionist"></Navigator>
            <Navigator destination="/example" destinationName="Example" color="purple"></Navigator>
            <Navigator destination="/jsx" destinationName="JSX"></Navigator>

        </div>

    )

}