import { Dashboard } from "./component/Dashboard";
import { Header } from "./component/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
      <>
          <Header />
          <Dashboard />
          <GlobalStyle />
      </>
  );
}
