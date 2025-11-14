import React from "react";
import Layout from "@theme/Layout";

export default function nguyen() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Nguyen's Page</h1>
        <p>Docusaurus Page by React Component</p>
      </div>
    </Layout>
  );
}
