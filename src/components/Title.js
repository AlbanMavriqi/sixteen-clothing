import React from 'react'
import styled from 'styled-components'

const Title = ({title}) => {
    return (
        <TitleWrapper>
            <span>{title}</span>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    margin: 40px 16px;
    border-bottom: 1px solid #eee;
    padding-bottom: 2.5rem;
    span{
        font-size: 28px;
        font-weight: 400;
        color: #1e1e1e;
        margin-bottom: 15px;
    }
    @media (min-width: 768px) {
        width: 60vw;
        margin: 40px 16px;
        margin-bottom:40px;
        margin-top:40px;
        border-bottom: 1px solid #eee;
        padding-bottom: 0;
    }
`

export default Title
