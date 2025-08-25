import PollCard from "../../components/pollCardComponent";

function PollsPageHeader() {
    return (
        <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Explore All Polls</h1>
            <p className="text-slate-400 mt-4 text-lg">See what the world is asking. Cast your vote.</p>
        </div>
    );
}

// The Featured Poll component
function FeaturedPoll({ poll }) {
    return (
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Featured Poll</h2>
            <div className="max-w-2xl mx-auto">
                <PollCard poll={poll} />
            </div>
        </div>
    );
}


export default function PollsHeader() {
    const featuredPollData = {
        createdAt: '2 hours ago',
        question: 'What new skill are you learning in 2024?',
        options: [
            'AI/Machine Learning',
            'A new language',
            'A musical instrument',
            'Graphic Design'
        ],
    };

    return (
        <div className="bg-slate-900 min-h-screen py-12 px-4">
            <div className="container mx-auto">
                <PollsPageHeader />
                <FeaturedPoll poll={featuredPollData} />
            </div>
        </div>
    );
};