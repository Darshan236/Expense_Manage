import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './CssFiles/Authentication.module.css'; // Import CSS Module


const Authentication = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    return (
        <div className={styles.container}> {/* Use className from CSS Module */}
            <div className={styles.center}>
                <h1>Login</h1>
                <form action='' method='POST'>
                    <div className={styles.txt_field}>
                        <input type="text" name="username" required value={credentials.username} />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="password" name="password" required value={credentials.password}/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <input name="submit" type="Submit" value="Login"/>
                    <Link to="/signup">
                        <div className={styles.signup_link}>
                            Not a Member ? Signup
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}


export default Authentication;
