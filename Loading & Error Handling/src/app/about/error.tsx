'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
        <div className="p-6 bg-red-200 border border-red-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-800">Error: Something went wrong!</h2>
        </div>
    </div>
);
}