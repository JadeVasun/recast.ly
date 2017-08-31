class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      select: window.exampleVideoData[0],
      videos: window.exampleVideoData,
    };
  }

  onClickEvent(video) {
    this.setState({
      select: video
    });
  }

  render() {
  //console.log('test', this.state.select);
    return ( <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><Search /></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video = {this.state.select} />
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.state.videos} click={this.onClickEvent.bind(this)} />
        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


