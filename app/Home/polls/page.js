import NavComponent from "../components/navComponent";
import PollHeader from "./components/pollHeaderComponent";
import PollsList from "./components/pollBodyComponent";

export default function PollsPage() {
    const navItems = [
        { name: 'Home', link: '/Home' },
        { name: 'About', link: '/' },
        { name: 'MyPolls', link: '/' },]
    return (
        <div className="bg-slate-900 ">
            <NavComponent navItems={navItems} />
            <PollHeader />
            <div className="container mx-auto pb-12 px-10">
                <PollsList />
            </div>


        </div>
    );
}