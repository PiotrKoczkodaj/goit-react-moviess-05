import { Link, Outlet, useLocation } from "react-router-dom"
import { Suspense } from "react";
import styles from './Navigation.module.css';

export const Navigation = () => {
    const location = useLocation();

    return (
        <div>
            <nav className={styles.navigate}>
            <Link className={location.pathname==='/'?styles.linksActive:styles.links} to="/">Home</Link>
            <Link className={location.pathname==='/movies'?styles.linksActive:styles.links } to="movies">Movies</Link>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>    
        </div>
    )
}

