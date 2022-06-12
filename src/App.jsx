import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styles from "./App.module.css";
import { MovieDetails } from "./MovieDetails";
import { LandingPage } from "./pages/LandingPage";


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
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </main>
        </Router>
    );
}