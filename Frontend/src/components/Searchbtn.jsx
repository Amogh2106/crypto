import './Searchbtn.css';

function Searchbtn() {
    return (
        <>
            <div className="search">
                <input type="text" id="search-bar" />
                <button className="search-icon">🔍</button>
            </div>
        </>
    );
}

export default Searchbtn;