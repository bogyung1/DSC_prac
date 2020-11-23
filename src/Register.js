import React, {Component} from 'react';
import './App.css';

class Register extends Component {
    state={
        id:'',
        name:'',
        birth:'',
        phone:'',
        gender:'',

    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    buttonHandler=()=>{
        alert('id: '+this.state.id +'\n'
            +'이름: '+this.state.name+'\n'
            +'생년월일: '+this.state.birth+'\n'
            +'성별: '+this.state.gender+'\n'
            +'전화번호: '+this.state.phone);

    }



    render(){
        return (
            <div className="App">
                <h1>회원가입</h1>
                <p><input type="text"
                          placeholder="아이디"
                          name="id"
                          value={this.state.id}
                          onChange={this.handleChange}/></p>
                <p><input type="text"
                          placeholder="비밀번호"
                          onChange={this.handleChange}/></p>
                <p><input type="text"
                          placeholder="비밀번호 재확인"
                          onChange={this.handleChange}/></p>
                <p><input type="text"
                          placeholder="이름"
                          name="name" value={this.state.name}
                          onChange={this.handleChange}/></p>
                <p><input type="date"
                          name="birth" value={this.state.birth}
                          onChange={this.handleChange}/></p>
                <select name="gender" value={this.state.gender}
                        onChange={this.handleChange}>
                    <option value="여">여</option>
                    <option value="남">남</option>
                </select>


                <p><input type="text"
                          placeholder="휴대전화"
                          name="phone" value={this.state.phone}
                          onChange={this.handleChange}/></p>
                <p><button
                    onClick={this.buttonHandler}>가입하기</button></p>

            </div>
        );
    }
}

export default Register;
