import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { useGlobalContext } from "./Context";
import { AuthContainer, Form } from "./Auth.styled";

function Auth() {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const [isMember, setIsMember] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.message);
      setErrorRegister(error.message);
    }
    setRegisterEmail("");
    setRegisterPassword("");
  };
  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.message);
      setErrorLogin(error.message);
    }
    setLoginEmail("");
    setLoginPassword("");
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    setTimeout(() => {
      setErrorLogin("");
    }, 3000);
  }, [errorLogin]);
  useEffect(() => {
    setTimeout(() => {
      setErrorRegister("");
    }, 3000);
  }, [errorRegister]);

  return (
    <AuthContainer>
      {!isMember && (
        <Form onSubmit={register} autoComplete="off">
          <h3>Create your account</h3>
          <p>{errorRegister}</p>
          <input
            autoComplete="off"
            type="email"
            placeholder="Email  (doesn't have to be real)"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            autoComplete="off"
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
          <footer>
            <span>Already a user?</span>
            <span onClick={() => setIsMember(true)}>Log in</span>
          </footer>
        </Form>
      )}

      {isMember && (
        <Form onSubmit={login}>
          <h3>Welcome back</h3>
          <p>{errorLogin}</p>
          <input
            type="email"
            placeholder="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button type="submit">login</button>
          <footer>
            <span>Don't have an account?</span>
            <span onClick={() => setIsMember(false)}>Sign up</span>
          </footer>
        </Form>
      )}
    </AuthContainer>
  );
}

export default Auth;
