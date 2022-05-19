import Link from "next/link";
import styles from "./../styles/Navigator.module.css"

export default function Navigator(props){

    return(
        
        <div className={styles.navigator} style={{
            backgroundColor: props.color ?? 'red'
        }}>

            <Link href={props.destination} passHref>{props.destinationName}</Link>
        
        </div>

    )

}