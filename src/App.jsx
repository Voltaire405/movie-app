import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { MovieGrid } from "./MovieGrid";
import { MovieDetails } from "./MovieDetails";
import styles from "./App.module.css";
import movies from "./Film.json";


export function App() {
    //console.log(movies);
    return (
        <Router>
            <header>
                <Link replace="true" to="/">
                    <h1 className={styles.tittle}>
                        Movies
                    </h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path="/details/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={<MovieGrid />} />
                </Routes>
            </main>
        </Router>
    );
}