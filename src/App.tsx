import { css, Global } from "@emotion/core";
import React from "react";
import Layout from "./components/Layout";
import Quiz from "./pages/Quiz";

const App: React.FC = () => (
  <Layout>
    <Global
      styles={css`
        * {
          font-family: sans-serif;
          color: #3c3c3c;
        }
        body {
          margin: 0;
        }
        #root {
          height: 100vh;
          display: flex;
          flex: 1;
        }
      `}
    />
    <Quiz />
  </Layout>
);

export default App;
