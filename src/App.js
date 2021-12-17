import Crud from "./Crud";
import Auth from "./Auth";
import styled from "styled-components";
import { useGlobalContext } from "./Context";
import { ThemeProvider } from "styled-components";

const theme = {
  color: "#ee7752",
};

const App = () => {
  const { user, isLoggedIn } = useGlobalContext();
  return (
    <ThemeProvider theme={theme}>
      <>{isLoggedIn ? <Crud /> : <Auth />}</>
    </ThemeProvider>
  );
};

export default App;
