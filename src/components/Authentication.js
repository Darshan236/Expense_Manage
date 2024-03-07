import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './CssFiles/Authentication.module.css'; // Import CSS Module

const Authentication = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', credentials);

            if (response.status === 200) {
                const { token } = response.data;
                sessionStorage.setItem('token', token);
                localStorage.setItem('uname', credentials.username);
                console.log('Login successful!');
                navigate('/dashboard');
            } else {
                console.error('Login failed:', response.data.error);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    return (
        <div className={styles.container}> {/* Use className from CSS Module */}
            <div className={styles.center}>
                <h1>Login</h1>
                <form action='' method='POST' onSubmit={handleLogin}>
                    <div className={styles.txt_field}>
                        <input type="text" name="username" required value={credentials.username} onChange={handleChange}/>
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="password" name="password" required value={credentials.password} onChange={handleChange}/>
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
