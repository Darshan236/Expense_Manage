import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    });
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to the signup endpoint
            const response = await fetch('http://localhost:8080/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // You can add other headers if needed
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {

                const responseData = await response.json();
                console.log(responseData.message);
            } else {
                // If the response status is not OK, handle the error case
                const errorData = await response.json();
                console.error('Error during signup:', errorData.error);
            }
        } catch (error) {
            // Handle network errors or other exceptions
        }
    };

    return (
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} style={{
                margin: '0 auto',
                maxWidth: '320px',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            }}>
                <div style={{
                    marginBottom: '20px',
                    position: 'relative'
                }}>
                    <input type="text" name="username" value={user.username} placeholder="Username" onChange={handleChange} style={{
                        width: '90%',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#555',
                        transition: 'border-color 0.3s ease',
                    }} />
                </div>
                <div style={{
                    marginBottom: '20px',
                    position: 'relative'
                }}>
                    <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} style={{
                        width: '90%',
                        padding: '15px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#555',
                        transition: 'border-color 0.3s ease',
                    }} />
                </div>
                <div style={{
                    marginBottom: '20px',
                    position: 'relative'
                }}>
                    <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} style={{
                        width: '90%',
                        padding: '15px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#555',
                        transition: 'border-color 0.3s ease',
                    }} />
                </div>
                <div style={{
                    marginBottom: '20px',
                    position: 'relative'
                }}>
                    <input type="password" name="cpassword" placeholder="Confirm Password" onChange={handleChange} style={{
                        width: '90%',
                        padding: '15px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#555',
                        transition: 'border-color 0.3s ease',
                    }} />
                </div>
                <input type="submit" value="Sign Up" style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '15px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                }} />
                <Link to="/" style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    fontSize: '14px',
                    color: '#007bff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                }}>
                    Have an Account? Login
                </Link>
            </form>
        </div>
    );
}

export default Account;
