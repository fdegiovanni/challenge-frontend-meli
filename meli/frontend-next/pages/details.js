import ItemDetail from '../components/ItemDetails';

const Details = props => (
  <div>
    <ItemDetail id={props.query.id} />
  </div>
);

export default Details;