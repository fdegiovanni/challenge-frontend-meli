import styled from 'styled-components';

const Item = styled.a`
  padding-top: 14px;
  padding-bottom: 14px;
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    width: 180px;
    height: 180px;
    border-radius: 4px;
    object-fit: cover;
    padding-left: 2rem;
    margin-right: 0;
    padding-right: 0;
  }

  div {
    padding-left: 14px;
    width: 70%;
  }

  span {
    color: ${props => props.theme.grey};
    font-size: 12px;
    line-height: 2;
    font-weight: 100;
    flex-grow: 1;
    font-size: 1.5rem;
    margin-right: 10%;
    text-align: right;
    padding-top: 1.5rem;
    width:30%;
  }

  h1 {
    font-size: 24px;
    line-height: 2;
    font-weight: 600;
    flex-grow: 1;
    font-size: 1.5rem;
    margin-bottom: 32px;
  }
  p {
    font-size: 18px;
    line-height: 2;
    font-weight: 100;
    flex-grow: 1;
    font-size: 1.5rem;
    margin: 0;
  }
`;

export default Item;