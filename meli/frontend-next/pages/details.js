import SingleItem from '../components/SingleItem';

const Details = props => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Details;