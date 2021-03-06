import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SandwichBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
