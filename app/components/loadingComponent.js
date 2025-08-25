
export default function LoadingSpinner(){
  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="sr-only">Loading...</span>
      <div className="h-4 w-4 bg-cyan-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-cyan-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-cyan-500 rounded-full animate-pulse"></div>
    </div>
  );
};
