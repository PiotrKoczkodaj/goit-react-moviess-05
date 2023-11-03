import { Link, Outlet } from "react-router-dom"
import { Suspense } from "react";

export const Navigation = () => {
    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
        </div>
    )
}