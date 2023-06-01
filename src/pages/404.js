import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { ErrorContainer, TextContainer } from "../components/styles/ErrorContainer";


const NotFoundPage = () => (

  <Layout >
    <ErrorContainer>
  
        <h1>404</h1>
        <TextContainer>
          <p>You just hit a route that doesn&#39;t exist...</p>
          <a href="/">Go to Home</a>
          </TextContainer>

    </ErrorContainer>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage;
