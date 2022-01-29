import React from "react";
import unpslash from "../api/unpslash";



class App extends React.Component {

  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unpslash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  // <progress />

}

export default App;
