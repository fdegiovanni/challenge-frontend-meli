import unfetch from 'isomorphic-unfetch';
import { endpoint } from "../config";

export default function (query){
    const url = `${endpoint}/api/items?q=${query}`;
    return unfetch(url)
        .then(res => res.json());
}