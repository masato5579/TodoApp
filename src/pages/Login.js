import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'

import firebase from '../config/firebase'

import styled from 'styled-components'

import 'firebase/auth'
import { AuthContext } from '../AuthService'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            })
            .catch(err => {
                console.log(err)
                alert('メールアドレスまたはパスワードが間違っています')
            })

    }

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to='/' />
    }


    return (
        <>
            <LOGIN>
                <h1>To-Do List With Timer ログイン画面</h1>
                <form onSubmit={handleSubmit}>
                    <p>下記を入力するとログインすることができます。</p>
                    <div class="inputs">
                        <label htmlFor='email'>メールアドレス</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='メールアドレス'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div class="inputs">
                        <label htmlFor='password'>パスワード</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='パスワード'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <BUTTON>
                        <button type='submit'>ログイン</button>
                    </BUTTON>
                </form>
                <NOLOGIN href="/signup">アカウントをお持ちでない方はこちら</NOLOGIN>
            </LOGIN>
        </>
    )
}

export default Login


const LOGIN = styled.section`
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

const NOLOGIN = styled.a`
    margin-top:30px;
`