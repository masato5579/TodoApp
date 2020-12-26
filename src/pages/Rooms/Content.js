import React, { useState } from 'react'

import styled from 'styled-components'

const Content = () => {
    const [content, setContent] = useState(false)

    //閉じる・開く
    const toggle = () => {
        setContent(!content)
    }


    return (
        <>
            <CONTENT>
                <h3>内容</h3>
                <OPENANDCLOSE>
                    <BUTTONS onClick={() => { toggle() }}
                        style={
                            { opacity: content ? '1.0' : '0.6' }
                        }>
                        <p id="openContent">内容を開く</p>
                        <div id="clickopen">
                            <span id="clickopenLeft"></span>
                            <span id="clickopenRight"></span>
                        </div>
                    </BUTTONS>
                </OPENANDCLOSE>
                <textarea placeholder="ここに内容の詳細をかきましょう" style={
                    { display: content ? 'block' : 'none' }}></textarea>
            </CONTENT>
        </>
    )
}

export default Content


//CONTENT全体を囲む
const CONTENT = styled.section`
    textarea{
        width:100%;
        margin-top:10px;
        min-height:300px;
    }
`

//開く・閉じる
const OPENANDCLOSE = styled.div`
    h3{
        width:70%;
    }
`

//↓ボタン
const BUTTONS = styled.a`
        display:flex;
        width:100%;
        text-align:left;
        cursor:pointer;
        opacity:.6;
        #clickopen{
            padding-left:10px;
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
