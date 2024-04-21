import React, { useState } from 'react';
import './Oqtuvchi.css'; // CSS faylini import qilamiz 

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Parolni ko'rsatish/kirish holatini boshqaruvchi yangi state
  const [message, setMessage] = useState('');

  const correctEmail = "ali1234@example.com"; // To'g'ri email manzili
  const correctPassword = "ali1234"; // To'g'ri parol

  const handleSubmit = (event) => {
    event.preventDefault(); // Formaning sahifani qayta yuklanishini oldini oladi
    if (email === correctEmail && password === correctPassword) {
      setMessage('Success!');
    } else {
      setMessage('Incorrect email or password.');
    }
  };

  // Parolni ko'rsatish/kirish holatini o'zgartiruvchi funksiya
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="content">

      <div className="login-form  ">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email" // Email tipini aniqlab qo'yish maqsadga muvofiq
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"} // Parolni ko'rsatish/kirish holatiga qarab `type`ni o'zgartirish
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button onClick={togglePasswordVisibility} type="button"> {/* Type="button" qo'shish shart, aks holda forma yuboriladi */}
              {showPassword ? 'Hide' : 'Show'} {/* Parolni ko'rsatish/kirish holatiga qarab tugma matnini o'zgartirish */}
            </button>
          </div>
          <button type="submit">Login</button>
          <div className="message">{message}</div>
        </form>
      </div>
    </div>

  );
}

export default LoginForm;
