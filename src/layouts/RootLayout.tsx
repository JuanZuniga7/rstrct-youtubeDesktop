import {Outlet} from "react-router-dom";
import Header from "../components/semantics/Header.tsx";

export default function RootLayout(){
    return(
        <>
            <Header/>
            <main className="h-full overflow-y-auto overflow-x-hidden relative top-16 w-[98%]">
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}