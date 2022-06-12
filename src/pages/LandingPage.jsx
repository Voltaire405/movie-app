import { Fragment } from "react";
import { Search } from "../components/Search";
import { MovieGrid } from "../MovieGrid";


export function LandingPage() {
    return (
        <Fragment>
            <Search />
            <MovieGrid />
        </Fragment>
    )
}
