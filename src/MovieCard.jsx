import { Fragment } from "react";
import style from "./MovieCard.module.css";



export function MovieCard({ movie }) {    
    return (
        <Fragment >
            <li className={style.movieCard} >
                <img
                    height={200}
                    width={150}
                    className={style.movieImage}
                    src={movie.Images[0]}
                    alt={movie.Title} />
                <div>
                    {movie.Title}
                </div>
            </li>
        </Fragment>
    );
}