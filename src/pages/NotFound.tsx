import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <p className="font-[Caveat] text-2xl text-[#4FC3D9] mb-2">Looks like this page drifted away</p>
      <h1 className="font-[Fredoka] text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-[#555] max-w-md mb-8">
        The page you're looking for doesn't exist. Head back home or give us a call — we're happy to help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="bg-[#1a1a1a] text-[#dfe24b] px-8 py-3 rounded-full font-bold hover:bg-[#333] transition-colors">
          Back to Home
        </Link>
        <a href="tel:9412683747" className="bg-[#dfe24b] text-[#1a1a1a] px-8 py-3 rounded-full font-bold hover:bg-[#d0d340] transition-colors">
          Call (941) 268-3747
        </a>
      </div>
    </div>
  )
}
