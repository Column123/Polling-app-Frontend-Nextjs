export default function UseCaseComponent() {
 const cases = [
        { name: 'Teachers', color: 'text-cyan-400', icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.004-.018.002-.006.001c-.004.001-.007 0-.011.001M12 10.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" /></svg> },
        { name: 'Marketers', color: 'text-pink-400', icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg> },
        { name: 'Streamers', color: 'text-amber-400', icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3.75M16.5 18.75h-9" /></svg> },
        { name: 'Teams', color: 'text-lime-400', icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.228a4.5 4.5 0 00-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 001.13-1.897L16.5 7.5m0 0l2.84-2.84a6.086 6.086 0 00-8.482-8.482l-2.84 2.84M16.5 7.5l-2.84 2.84m0 0l-2.84 2.84m2.84-2.84l2.84 2.84" /></svg> }
    ];
    return (
        <section className="py-20 sm:py-24 "
            style={{background:"#0C1221"}}
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Perfect For Any Occasion</h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">From classrooms to boardrooms, get the pulse of any group.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {cases.map(item => (
                        <div key={item.name} className="flex flex-col items-center">
                            <div className={`flex items-center justify-center h-16 w-16 rounded-2xl bg-slate-800 ${item.color} mb-4`}>
                                {item.icon}
                            </div>
                            <h3 className={`text-lg font-semibold ${item.color}`}>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};