import React, { useState } from 'react'
import firebase from '../config/firebase'

import styled from 'styled-components'

const SignUp = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)

            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
                history.push('/')
            })

            .catch(err => {
                console.log(err)
                alert('有効なメールアドレスまたはパスワードではありません。')
            })
    }



    return (
        <>
            <SIGNUP>
                <h1>To-Do List With Timer  会員登録</h1>
                <form form onSubmit={handleSubmit}>
                    <p>下記を入力することで会員登録を行うことができます。</p>
                    <div class="inputs">
                        <label htmlFor='name'>お名前</label>
                        <input
                            name='name'
                            type=''
                            id='name'
                            placeholder='お名前'
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div class="inputs">
                        <label htmlFor='email'>メールアドレス</label>
                        <input
                            name='email'
                            type='email'
                            id='email'
                            placeholder='メールアドレス'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div class="inputs">
                        <label htmlFor='password'>パスワード</label>
                        <input
                            name='password'
                            type='password'
                            id='password'
                            placeholder='パスワード'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <BUTTON>
                        <button type='submit'>会員登録して、『To-Do List With Timer』を利用する</button>
                    </BUTTON>
                </form>
            </SIGNUP>
        </>
    )

}

export default SignUp

const SIGNUP = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:80vh;
    font-size:1.2rem;
    form{
        width:40%;
        margin-top:30px;
        .inputs{
            display:flex;
            justify-content:space-between;
            margin-top:20px;
            input{
                width:50%;
                height:30px;
            }
        }
    }
`

const BUTTON = styled.div`
    text-align:center;
    margin-top:50px;
    button{
        font-size:1.2rem;
        padding:5px 10px;
        color:#fff;
        background-color:#4103ff;
        font-weight:bold;
    }

`