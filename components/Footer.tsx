export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <p className="text-blue-100 text-sm text-center">
          &copy; {new Date().getFullYear()} Dillon Grannis
        </p>
      </div>
    </footer>
  )
}

