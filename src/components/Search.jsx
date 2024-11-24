import React, {useState, useEffect, useRef} from 'react';



function Search(props) {

    let [search, setSearch] = useState('');
    let [type, setType] = useState('all');
   

    let handleKey = (event) => {
        if (event.key === "Enter") {
            props.searchMovies(search, type);
        }
    }
    let handleFilter = (event) => {
        setType(event.target.dataset.type);

    }

    useEffect(() => {
            props.searchMovies(search, type)
    }, [type]);



    return (<div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="Search"
                    type="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={handleKey}

                />
                <div>
                    <label>
                        <
                            input className="with-gap" name="type" type="radio"
                                  data-type='all'
                                  onChange={handleFilter}
                                  checked={type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <
                            input className="with-gap" name="type" type="radio"
                                  data-type='movie'
                                  onChange={handleFilter}
                                  checked={type === "movie"}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <
                            input className="with-gap" name="type" type="radio"
                                  data-type='series'
                                  onChange={handleFilter}
                                  checked={type === "series"}
                        />
                        <span>Series only</span>
                    </label>
                </div>

                <button className="btn search-button"
                        onClick={() => props.searchMovies(search, type)}>
                    Search
                </button>
            </div>
        </div>
    )

}

export {Search};