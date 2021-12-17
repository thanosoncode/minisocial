import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 500px) {
    align-items: flex-start;
    padding-top: 200px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #777;
  padding: 10px;
  min-width: 360px;
  background: white;

  h3 {
    color: ${({ theme }) => theme.color};
    margin: 20px 0 10px 0;
    font-size: 2.3rem;
    text-align: center;
  }

  p {
    font-size: 1.1remem;
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    margin-bottom: 15px;
    border: none;
    outline: none;
    border-bottom: 1px solid #777;
    padding-left: 6px;
    font-size: 1.1rem;
  }

  button {
    margin: 10px 0;
    background-color: ${({ theme }) => theme.color};
    border-radius: 999px;
    cursor: pointer;
    transition: 0.3s ease;
    border: none;
    color: white;
    padding: 10px 0;
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  button:hover {
    opacity: 0.8;
  }

  button:active {
    transform: scale(0.98);
  }

  footer {
    text-align: center;
  }
  span {
    font-size: 1.2rem;
    margin-right: 10px;
  }

  span:last-child {
    color: ${({ theme }) => theme.color};
    cursor: pointer;
  }

  @media (max-width: 500px) {
    button {
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }
`;
