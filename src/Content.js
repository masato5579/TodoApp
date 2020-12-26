import React, { useState } from 'react'


import styled from 'styled-components'


const Content = () => {

    const [content, setContent] = useState(false)

    const toggle = () => {
        setContent(!content)
    }


    return (
        <>
            <TEXT>
                <h3>内容</h3>
                <OPENANDCLOSE>
                    <BUTTONS onClick={() => { toggle() }}
                        style={
                            { opacity: content ? '1.0' : '0.6' }
                        }>
                        <p>内容を開く</p>
                        <div id="clickopen">
                            <span id="clickopenLeft"></span>
                            <span id="clickopenRight"></span>
                        </div>
                    </BUTTONS>
                </OPENANDCLOSE>
                <textarea placeholder="ここに内容の詳細をかきましょう" style={
                    { display: content ? 'block' : 'none' }}></textarea>
            </TEXT>
        </>
    )
}

export default Content

const TEXT = styled.div`
    textarea{
        width:100%;
        margin-top:10px;
        min-height:300px;
    }
`

const OPENANDCLOSE = styled.div`
    h3{
        width:70%;
    }
`
const BUTTONS = styled.a`
        display:flex;
        width:20%;
        text-align:left;
        cursor:pointer;
        opacity:.6;
        #clickopen{
            padding-left:10%;
            #clickopenLeft{
                display:inline-block;
                height:2px;
                width:10px;
                background-color:#fff;
                transform: skew(-45deg,45deg);
            }
            #clickopenRight{
                display:inline-block;
                height:2px;
                width:10px;
                background-color:#fff;
                transform: skew(45deg,-45deg);
            }
        }
`
