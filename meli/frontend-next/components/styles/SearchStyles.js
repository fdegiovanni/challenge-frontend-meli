import styled from 'styled-components';

const StyleSearch = styled.header`
    background-color: ${props => props.theme.yellow};
    padding: 1rem 15% 1rem 15%;
    display: flex;
    width: 100%;
`;

const Logo = styled.div`
    position: relative;
    z-index: 2;
    height: 36px;
`;

const Input = styled.div`
margin-left: 5rem;
width: 100%;
.input-group{
    display: table;
    border-collapse: collapse;
    width:100%;
    height: 36px;
  }
  .input-group > div{
    display: table-cell;
    border: 0;
    vertical-align: middle;
  }
  .input-group-icon{
    background:${props => props.theme.offWhite};
    padding: 2px 10px 2px 10px;
    height: 36px;
  }
  .input-group-area{
    width:100%;
  }
  .input-group input{
    text-size: 18px;
    border: 0;
    display: block;
    width: 100%;
    padding: 8px 2px 8px 8px;
    color: ${props => props.theme.black};
    ::placeholder { 
        color: ${props => props.theme.grey};
      }
  }
`;

export {StyleSearch, Logo, Input};