import styled from 'styled-components'

export const Button = styled.button`    
    border: ${(props) => props.theme === 'primary' ? 'none' : '1px solid white'};
    background: ${(props) => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : '#181F36'};
    font-size: 16px;
    color: white;
    padding: 16px 32px;
    width: fit - content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
    background-color: ${(props) => props.theme === 'primary' ? '#181F36' : 'white'};
    color: #181F36;
    font-weight: bold;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
 } 

    &:active {
    opacity: 0.1;
}
`
