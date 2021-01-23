import unfetch from 'isomorphic-unfetch';
import { endpoint } from "../config";

export default function (id){
    const url = `${endpoint}/api/items/${id}`;
    return unfetch(url)
        .then(res => res.json());
}