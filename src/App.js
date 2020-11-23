import React, {Component} from 'react';
import Register from "./Register";
import './App.css';
import LoginPage from "./LoginPage";
import BoardPage from "./BoardPage";


class App extends Component {
    render() {
        // return <Register/>
        return <BoardPage/>
    }
}

export default App;
