import Logo from './assets/images/spider-logo.png';

export default function Header() {
    return (
        <header className="header h-19 bg-amber-950/70 flex items-center justify-between px-4">
            <img src={Logo} alt="" className="w-14 h-14" />
            <ul className="text-3xl h-full">
                <li className="h-full">
                    <a className="flex items-center hover:bg-gray-300 gap-8 px-4 h-full m-auto" href="#">Home</a>
                </li>
            </ul>
        </header>
    );
}