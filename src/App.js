import Crud from "./Crud";
import Auth from "./Auth";

import { useGlobalContext } from "./Context";
import { ThemeProvider } from "styled-components";

const theme = {
  color: "#e73c7e",
};

const App = () => {
  const { isLoggedIn } = useGlobalContext();
  return (
    <ThemeProvider theme={theme}>
      <>{isLoggedIn ? <Crud /> : <Auth />}</>
    </ThemeProvider>
  );
};

export default App;
