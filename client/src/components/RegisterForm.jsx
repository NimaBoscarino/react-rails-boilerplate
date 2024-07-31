import { useState } from "react";
import axios from "axios";

const RegisterForm = (props) => {
    const { setIndexPage } = props;

    const name = 'username';
    const email = 'example@email.com';
    const password = 'password';
    const confirmPassword = 'password';
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // sending request to backend with existing data to login route
          const response = await axios.post('http://localhost:3001/api/login', {
            email,
            password
          }, { withCredentials: true });
          
          setMessage(response.data.notice);
          setIndexPage('dashboard');  //update index page state to display conditionally
        } catch (error) {
          if (error.response) {
            setMessage(error.response.data.alert);
          } else {
            setMessage('An error occurred. Please try again.');
          }
        }
    };

    return(
        <div>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="name" id="name" value={name} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} />
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" value={confirmPassword} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
