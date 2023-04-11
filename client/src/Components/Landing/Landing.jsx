import styles from './Landing.module.css';

import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.landingContainer}>
                <div>
                    <span>
                        <h1>DOG WEB PAGE</h1>
                        <h3>The place where all dog breeds are known</h3>
                            <p>Search information about every breed</p>
                            <p>Look for your next dog pet</p>
                            <p>Add your own</p>
                    </span>
                    <Link className={styles.link} to='/dogs'>WOOF</Link>
                </div>
                <img src="https://images.unsplash.com/photo-1621371236495-1520d8dc72a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyb3duJTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Dog example" />
            </div>
        </div>
    )
}