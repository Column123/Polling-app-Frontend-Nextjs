'use client'
import { useState } from "react";
import PollCard from "../../components/pollCardComponent";



export default function PollsList() {
    const allPolls = [
        { id: 2, createdAt: '2 weeks ago', question: 'Which fictional world would you live in?', options: ['Hogwarts', 'Middle-earth', 'Narnia', 'The Star Wars Galaxy'], category: 'Fun' },
        { id: 3, createdAt: '1 month ago', question: 'Pineapple on pizza?', options: ['Yes, it\'s delicious!', 'No, it\'s a crime!'], category: 'Fun' },
        { id: 4, createdAt: '3 months ago', question: 'Best genre for a movie night?', options: ['Sci-Fi', 'Comedy', 'Thriller', 'Documentary'], category: 'Fun' },
        { id: 5, createdAt: '5 days ago', question: 'Which continent would you most like to visit?', options: ['Asia', 'Europe', 'South America', 'Africa'], category: 'Travel' },
        { id: 6, createdAt: '1 week ago', question: 'What\'s the best way to start the day?', options: ['Coffee', 'Tea', 'Workout', 'Meditation'], category: 'Lifestyle' },
        { id: 7, createdAt: '2 days ago', question: 'What\'s your favorite programming language?', options: ['JavaScript', 'Python', 'Rust', 'Go'], category: 'Tech' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('Fun'); 

    const filteredPolls = allPolls.filter(poll => {
        const matchesCategory = activeFilter === 'All' || poll.category === activeFilter;
        const matchesSearch = poll.question.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const filters = ['All', 'Tech', 'Travel', 'Lifestyle', 'Fun'];

    return (
        <div>
            {/* Search and Filter Section */}
            <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="relative w-full md:max-w-md">
                     <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input
                        type="text"
                        placeholder="Search for polls..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-800/70 border border-slate-800 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-center bg-slate-800/70 p-1 rounded-full">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                activeFilter === filter 
                                ? 'bg-cyan-600 text-white' 
                                : 'text-slate-300 hover:bg-slate-700'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Responsive grid for the poll cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPolls.map((poll) => (
                    <PollCard key={poll.id} poll={poll} />
                ))}
            </div>
             {filteredPolls.length === 0 && (
                <div className="text-center col-span-full py-16">
                    <h3 className="text-2xl text-white font-bold">No Polls Found</h3>
                    <p className="text-slate-400 mt-2">Try adjusting your search or filter.</p>
                </div>
            )}
        </div>
    );
}