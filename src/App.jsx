import { Fragment } from "react";
import movies from "./Film.json";
import { MovieGrid } from "./MovieGrid";
import styles from "./App.module.css";


export function App() {
    console.log(movies);
    return (
        <Fragment>
            <header>
                <h1 className={styles.tittle}>
                    Movies
                </h1>
            </header>
            <main>
                <MovieGrid />
            </main>
        </Fragment>
    );
}