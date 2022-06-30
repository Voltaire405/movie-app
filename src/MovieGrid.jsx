import { useEffect, useState} from "react";

import { MovieCard } from "./MovieCard";
import { Spinner } from "./components/Spinner";
import { useQuery } from "./hooks/useQuery";
import { get } from "./utils/HttpRequests";
import styles from "./MovieGrid.module.css";


export function MovieGrid() {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);  

    const searchParam = useQuery().get('search');

    useEffect(
        () => {    
            const endpoint = searchParam ? '/search/movie?query=' + searchParam : '/discover/movie';
            
            get(endpoint)
                .then((data) => {
                    setMovies(data.results);
                    setLoading(false);
                });
        }, [searchParam]);

    if (loading) {
        return <Spinner />
    }
    return (
        <ul className={styles.movieGrid} >
            {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </ul>

    );
}