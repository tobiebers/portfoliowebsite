// _app.jsx
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap zuerst
import "../styles/globals.css";               // Dann deine globalen Styles
import "../styles/tabs.css";
import "../styles/CodeUniverse.css";
import "../styles/projects.css";
import "../styles/hero.css";
import "../styles/AnimatedKeywords.css";
import "../styles/Footer.css";
import "../styles/expertiseSection.css";
import "../styles/marketmaven.css";
import "../styles/clikce.css";
import {LanguageProvider} from "@/context/LanguageContext";
import Layout from "@/components/Layout";


export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
