import './App.css';
import React, {useEffect} from 'react';
import {Movies} from "./components/Movies";
import {Preloader} from "./components/Preloader";
import {Search} from "./components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

// export default class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             movies: [],
//             loading: true,
//         };
//     }
//
//     searchMovies = (str, type = "all") => {
//         this.setState({loading: true});
//         if(!str){
//             str="matrix"
//         }
//         fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
//             type !== "all" ? `&type=${type}` : ""
//         }`)
//             .then(response => response.json())
//             .then(data => this.setState({movies: data.Search, loading: false}));
//     }
//
//
//     componentDidMount() {
//         fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
//             .then(response => response.json())
//             .then(data => this.setState({movies: data.Search, loading: false }))
//             .catch(error => {
//                 console.error(error)
//                 this.setState({loading: false});
//             });
//     }
//
//     render() {
//         const {movies,loading} = this.state;
//
//         return (
//             <main className="container content">
//                 <Search searchMovies={this.searchMovies}/>
//                 {loading ? (
//                     <Preloader/>
//                 ) : (
//                     <Movies movies={movies}/>
//                 )}
//             </main>
//         );
//     }
// }

export default function () {

    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    const searchMovies = (str, type = "all") => {
        setLoading((loading) => loading = true);
        if (!str) {
            str = "matrix"
        }
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`)
            .then(response => response.json())
            .then(data => {
                setMovies((movies) => movies = data.Search);
                setLoading((loading) => loading = false);
            }).catch(error => {
                console.error(error)
                setLoading((loading) => loading = false)
            });
    }


    return (
        <main className="container content">
            <Search searchMovies={searchMovies}/>
            {loading ? (
                <Preloader/>
            ) : (
                <Movies movies={movies}/>
            )}
        </main>
    );

}
