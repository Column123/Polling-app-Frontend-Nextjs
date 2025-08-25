import LoadingSpinner from "./components/loadingComponent";
export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-4 font-sans">
            <LoadingSpinner />
        </div>
    );
}