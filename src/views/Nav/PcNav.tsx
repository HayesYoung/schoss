import React, { useState } from 'react';
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom';


function PcNav(props: any) {

    const [taps, setTaps] = useState([

    ])

    return (
        <CssStyle>
            {/* This is Logo */}
            <div className="y-logo">HayesYoung</div>
            {/*  */}
            <div className="y-grid-two">
                <NavLink to="/main" className="y-navlink">主页</NavLink>
                <NavLink to="/main" className="y-navlink">计算机基础</NavLink>
                <NavLink to="/main" className="y-navlink">English</NavLink>
                <NavLink to="/main" className="y-navlink">数学</NavLink>
                <NavLink to="/main" className="y-navlink">政治</NavLink>
                <NavLink to="/main" className="y-navlink">日本語</NavLink>
            </div>
            <div>..</div>
        </CssStyle>
    )
}

export default withRouter(PcNav)

const CssStyle = styled.div`
    position: relative;
    width: 100%;
    text-align: center;

    /* Pc端 */
    @media only screen and (min-width: 1336px) {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        
        .y-logo{
            font-size: 24px;
        }
        background-color: red;
    }


    /* 适配ipad */
    @media only screen and (min-width: 767px) and (max-width: 1336px) {
        display: grid;
        grid-template-columns: 1fr 6fr 1fr;


        .y-logo{
            /* line-height: 50px;
            padding-top: 20px;
            padding-left: 40px; */

            user-select: none;

            font-size: 16px;
            color: orange;
        }
    }


    /* 移动端隐藏 */
    @media only screen and (max-width: 767px) {
        display: none;
    }
    

    



    
    .y-logo{
        line-height: 60px;
        /* padding-top: 20px; */
        padding-left: 46px;

        user-select: none;

        font-size: 24px;
        color: orange;
    }

    .y_grid-two{
        /* text-align: center; */
        /* margin: auto auto; */
        
    }

    .y-navlink{
        font-size: 20px;
        line-height: 60px;
        margin: 0 10px;
    }
`