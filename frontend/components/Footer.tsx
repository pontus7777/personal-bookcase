export default function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-10">
      <div className="text-center text-sm text-gray-500">
        <p>© 2026 Pontus — Personal Bookcase</p>
        <p className="mt-1">
          Powered by{' '}
          <a href="https://openlibrary.org" className="underline">
            Open Library API
          </a>{' '}
          •{' '}
          <a
            href="https://github.com/YOUR_USERNAME/YOUR_REPO"
            className="underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
