export default function PollCard({ poll }) {
    return (
        <div className="bg-slate-800/50 border border-slate-800 rounded-xl overflow-hidden group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
            <div className="p-6 flex-grow">
                <p className="text-sm text-slate-500 mb-2">{poll.createdAt}</p>
                <h3 className="text-lg font-semibold text-white mb-4">{poll.question}</h3>
                <div className="space-y-2 text-slate-300">
                    {poll.options.map((opt, index) => (
                        <p key={index} className="truncate">• {opt}</p>
                    ))}
                </div>
            </div>
            <div className="border-t border-slate-800">
                <a href="#" className="block w-full p-4 text-center font-semibold text-cyan-400 bg-cyan-500/10 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    Vote Now
                </a>
            </div>
        </div>
    );
};