import styled from 'styled-components';

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;

  .title { 
    margin-top: 32px;
    height: 680px;
    margin-right: 32px;
    text-align: left;

    span{
      font-size: 14px;
    }
    
    h1 {
      font-size: 24px;
      
      margin-bottom: 32px;
    }

    h2 {
      font-size: 46px;
      
      margin-bottom: 32px;

      sup {
        font-size: 30px;
      }
    }

    button {
      font-size: 24px;
      background-color: ${props => props.theme.blue};
      border: 0;
      color: white;
      width: 100%;
      padding-top: 8px;
      padding-bottom: 8px;
      text-align:center;
      border-radius: 4px;
    }
   
  }

.description { 
  margin-left: 32px;
  margin-top: 32px;
  width: 680px;

  h1 {
    font-size: 28px;
    line-height: 2;
    font-weight: 600;
    flex-grow: 1;
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    margin: 0;
    margin-bottom: 32px;
    color: ${props => props.theme.grey};
  }

  img{
   /* width: 680px;*/
    object-fit: contain;
  }

}


`;

export default Detail;