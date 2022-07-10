import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import Layout from "../components/layouts/main";
import { UserProvider } from "./usecontext"

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
