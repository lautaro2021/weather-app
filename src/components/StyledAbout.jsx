import styled from 'styled-components';

export const StyledAbout = styled.div`
    .container{
        display:flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 50px;
        background-color: white;
    }
    .container2{
        margin-top: 50px;
        background-color: #F0F8FF;
        width: 400px;
        height: 200px;
        border-radius: 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }       
    
    @media(max-width: 768px){
        .container{
            display: flex;
            flex-direction: column;
            margin-top: 150px;
        }
    }
`
