import PollCard from "./pollCardComponent";

export default function PollSection() {
    const polls = [
        { id: 1, question: "What's your favorite programming language?", options: ["JavaScript", "Python", "Rust"], createdAt: "2 days ago" },
        { id: 2, question: "Which continent would you most like to visit?", options: ["Asia", "Europe", "South America"], createdAt: "5 days ago" },
        { id: 3, question: "What's the best way to start the day?", options: ["Coffee", "Tea", "Workout"], createdAt: "1 week ago" }
    ];

    return (
        <section className="py-20 sm:py-24"
            style={{background: "#0A0E15"}}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Trending Polls</h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">See what the world is asking right now.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {polls.map(poll => (
                        <PollCard key={poll.id} poll={poll} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="/all-polls" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                        See More Polls &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};