import * as React from 'react';
import styled from 'styled-components'

// import PcNav from "../Nav/PcNav"

export default function Index(props: any) {

    return (
        <CssStyle>
            {/* <PcNav></PcNav> */}
            <h1>黄雨杨</h1>
        </CssStyle>
    )
}

const CssStyle = styled.div`

    h1{
        color: red;
        text-align: center;
    }

    h2{
        color: blue;
    }
`