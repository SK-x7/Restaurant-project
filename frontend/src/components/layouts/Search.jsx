import { FiSearch } from "react-icons/fi";
function Search() {
    return (
        <form>
            <div className="input-group">
                <input type="text" id="search_field" className="form-control" placeholder="Search your favorite restaurant"/>
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                    <FiSearch />
                    </button>
                </div>
                </div>            
        </form>
    )
}

export default Search
