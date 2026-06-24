import { useEffect, useState } from 'react';
import './Searchbtn.css';

function Searchbtn() {
    const [query, setQuery] = useState("");

    const[list,setList] = useState([]);

    useEffect(() => {
        async function loadData(){
            const coins_list = await fetchData();
            setList(coins_list);
        }
        loadData();
    },[]);

    async function fetchData(){
        try{
            const response = await fetch('https://api.coingecko.com/api/v3/coins/list');

            if(!response.ok){
                throw new Error(`Failed to fetch coins (${response.status})`);
            }

            const data = await response.json();
            return data;
        }
        catch(error){
            console.error(error);
        }
    }
    

    const filtered = query === "" ? [] : list.filter(match).slice(0, 20);
    function match(element){
        return element.name.startsWith(query);
    }

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    id="search-bar"
                    value={query}
                    placeholder='Search'
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
        </>
    );
}

export default Searchbtn;