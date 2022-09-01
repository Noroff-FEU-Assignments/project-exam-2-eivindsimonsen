import "./sass/style.scss";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </>
  );
}

export default App;
