import ItemList from '../components/Items';
import ItemDetails from '../components/ItemDetails';

const Item = (props) => {
    if(props.query.search != undefined){
        return <ItemList key={props.query.search} search={props.query.search}/>
    }
    if(props.query.id != undefined){
        return <ItemDetails id={props.query.id}/>
    }
    return (
        <div>
            <p>Sorry. I am lost. I don't know what I must to do...</p>
        </div>
    )
    };

export default Item;