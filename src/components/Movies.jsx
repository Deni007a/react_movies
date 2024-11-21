import React from 'react';
import {Movie} from "./Movie";

function Movies(props) {
    let { movies =[]} = props;

    return (
        <div className="movies">

            {movies.length?
                movies.map((movie) => (
                <Movie key={movie.imdbID} {...movie} />
                )):<h4>Nothing found</h4>}
        </div>
    );
}
export { Movies };