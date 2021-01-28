import React, { useState } from 'react';
import styled from 'styled-components'


export default function MoNav(props: any) {

    const [taps, setTaps] = useState([

    ])

    return (
        <CssStyle>
            {/* This is Logo */}
            <div className="y-logo">HayesYoung</div>
            {/*  */}
            <div>首页......</div>
            <h1>黄雨杨</h1>
        </CssStyle>
    )
}

const CssStyle = styled.div`
    .y-logo{

        padding-top: 20px;
        padding-left: 46px;

        user-select: none;

        font-size: 24px;
        color: #fff;
    }
`