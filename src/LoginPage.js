import React, {Component} from 'react';
import './App.css';

class LoginPage extends Component {
    state={
        id:'',

    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    buttonHandler=()=>{
        alert('id: '+this.state.id +'\n');

    }



    render(){
        return (
            <div className="App">

                <h1>로그인</h1>
                <p><input type="text"
                          placeholder="아이디"
                          name="id"
                          value={this.state.id}
                          onChange={this.handleChange}/></p>
                <p><input type="password"
                          placeholder="비밀번호"
                          onChange={this.handleChange}/></p>
                <p><button
                    onClick={this.buttonHandler}>로그인</button></p>
                <p><button
                    >회원가입</button></p>


            </div>
        );
    }
}

export default LoginPage;
