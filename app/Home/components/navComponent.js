import Link from "next/link";
export function NavComponentButton({ name, link }) { 
    return ( 
        <a href={link} className="text-slate-400 hover:text-white font-medium transition-colors">
            {name}
        </a>
    );
}
export default function NavComponent({  navItems }) {
    // You can later replace this with actual user data from state or props
    const user = {
        avatarUrl: 'profile.jpg',
    };
    const LogoIcon = () => (
        <svg className="w-7 h-7 text-cyan-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.672-2.672L11.25 18l1.938-.648a3.375 3.375 0 002.672-2.672L16.25 13.5l.648 1.938a3.375 3.375 0 002.672 2.672L21.75 18l-1.938.648a3.375 3.375 0 00-2.672 2.672z" />
        </svg>
    );
        return (
            <header className="bg-black/30 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800 bg-gray-900">
                <nav className="container mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                
                        <div className="flex-shrink-0">
                            <a href="#" className="text-2xl font-bold text-white flex items-center">
                                <LogoIcon />
                                PollWave
                            </a>
                        </div>

                        <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item) => (
                            <NavComponentButton key={item.name} name={item.name} link={item.link} />
                        ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            {user && (
                                <img
                                    className="h-9 w-9 rounded-full object-cover ring-2 ring-offset-2 ring-offset-slate-900 ring-cyan-500"
                                    src={user.avatarUrl}
                                    alt="User avatar"
                                />
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        );
    };