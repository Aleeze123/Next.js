export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-700 mb-6">We can't seem to find the page you're looking for.</p>
        <a 
          href="/" 
          className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-semibold"
        >
          Go back to Home
        </a>
      </div>
    );
  }