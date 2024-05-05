import MenuAndLogo from "../header/MenuAndLogo.tsx";
import SearchBar from "../header/SearchBar.tsx";
import Settings from "../header/Settings.tsx";
import SignIn from "../header/SignIn.tsx";

export default function Header(){
    return(
        <header className="fixed 3xl:w-[98%] top-2 h-12 flex flex-row items-center justify-between">
            <MenuAndLogo/>
            <SearchBar/>
            <div className="flex flex-row items-center gap-4">
                <Settings/>
                <SignIn/>
            </div>
        </header>
    )
}