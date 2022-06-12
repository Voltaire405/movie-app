import { Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";



export function MovieCard({ movie }) {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    return (
        <Fragment >
            <li className={style.movieCard} >
                <Link to={`/details/${movie.id}`}>
                    <img
                        title={movie.title}
                        height={200}
                        width={150}
                        className={style.movieImage}
                        src={IMAGE_URL + movie.poster_path}
                        alt={movie.title} />
                </Link>
                <div>
                    {movie.title}
                </div>
            </li>
        </Fragment>
    );
}