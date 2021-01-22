import Link from 'next/link';
import { StyleSearch, Logo, Input} from './styles/SearchStyles';




const Search = () => (
    <StyleSearch>
        <Logo><img src="../static/Logo_ML.png" alt="logo" /></Logo>
        <Input>
          <div className="input-group">
              <div className="input-group-area">
                  <input type="text" placeholder="Nunca dejes de buscar" /></div>
              <div className="input-group-icon"><img src="../static/ic_Search.png" /></div>
          </div>
        </Input>
    </StyleSearch>
)

export default Search;