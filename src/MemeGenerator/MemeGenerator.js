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
    this.handleChange = this.handleChange.bind(this);
    this.generateRandomMeme = this.generateRandomMeme.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ allMemeImgs: response.data.memes });
        console.log(this.state.allMemeImgs);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /**
   * Create a method that, when the "Gen" button is clicked, chooses one of the
   * memes from our `allMemeImgs` array at random and makes it so that is the
   * meme image that shows up in the bottom portion of our meme generator site
   */
  generateRandomMeme(event) {
    // prevents page from refreshing 
    event.preventDefault(); 
    const random = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMemeImg = this.state.allMemeImgs[random].url;
    this.setState({ randomImg: randomMemeImg });

    console.log(random, randomMemeImg);
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.generateRandomMeme}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
