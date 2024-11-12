import React, { useState } from 'react';
import styled from 'styled-components';
import { SucessToast, ErrorToast } from '../../Utils/ToastMessage.js';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: #f0f2f5;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const Login = () => {
  const Navi = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required.');
    } else {
      setError('');
    }
    const url = "http://localhost:8080/api/admin/login";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const result = await response.json();
    const { sucess, message, status, data } = result;
    if (!sucess) {
      return ErrorToast(message);
    } else {
      SucessToast(message);
      setTimeout(() => {
        Navi(`/admin/${data}/Home`)
      }, 1000);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Admin Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
      <ToastContainer />
    </Container>
  );
};

export default Login;
