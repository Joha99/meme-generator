import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ allMemeImgs: response.data.memes });
        console.log(this.state.allMemeImgs);
      });
  }

  render() {
    return (
      <div>
        <form action=""></form>
      </div>
    );
  }
}

export default MemeGenerator;
