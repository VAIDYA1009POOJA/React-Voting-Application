import React, { Component } from 'react';
import react from './images/react.png';
import js from './images/js.png'
import angular from './images/angular.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
     constructor(props){
    super(props);
this.votejs=this.votejs.bind(this);
this.votereact=this.votereact.bind(this);
this.voteangular=this.voteangular.bind(this);
    this.state={
        js:0,
        react:0,
        angular:0,

    }
}
    votejs() {
    this.setState({js:this.state.js + 1});
     }

    votereact() {
        this.setState({react:this.state.react + 1});
     }

     voteangular() {
        this.setState({angular:this.state.angular + 1});
     }

    render(){
    return (

        <div className="container-fluid">
            <div className="row jumbotron">
                <div className="col-sm">
                <h1>Welcome To Our Voting Site </h1>
                <p>Please click on the following image to vote</p>
                </div>
                <div className="col-sm ml-5">
                    <span className="badge badge-warning mx-3">Total Votes For Java Script : {this.state.js}</span>
                    <span className="badge badge-info">Total Votes For React : {this.state.react}</span>
                    <span className="badge badge-danger ml-3">Total Votes For Angular : {this.state.angular}</span>
                </div>
            </div>
            <div className="row container-fluid ml-5">
                <div className="col-sm-4">
                <img src={js} alt="javascript" onClick={this.votejs} />
                </div>
                <div className="col-sm-5">
                <img src={react} alt="react" onClick={this.votereact}/>
                </div>
                <div className="col-sm-3">
                <img src={angular} alt="angular" onClick={this.voteangular}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
