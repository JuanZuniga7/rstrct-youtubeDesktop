import UserIcon from "../../assets/svg/UserIcon.tsx";

export default function SignIn(){
    return(
        <button className="outline-none flex flex-row items-center justify-center px-1 rounded-full 3xl:w-28 3xl:h-8 border-[1px] border-gray-300 hover:bg-sky-100">
            <figure className="text-blue-600 flex flex-row gap-1 items-center">
                <UserIcon/>
                <figcaption>
                    <span>Sign in</span>
                </figcaption>
            </figure>
        </button>
    )
}