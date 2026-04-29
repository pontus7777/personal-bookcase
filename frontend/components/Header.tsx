export default function Header() {
  return (
    <header className="w-full border-b bg-gray-800">
      <div className="max-w-4xl mx-auto py-6 px-4 flex items-center justify-between">
        <div className="text-white">BookCase</div>

        <ul className="flex items-center gap-8 text-sm text-white">
          <li className="hover:text-orange-200 transition border-b-cyan-200 border-b">
            <a href="#">Top</a>
          </li>
          <li className="hover:text-orange-200 transition border-b-cyan-200 border-b">
            <a href="#">Browse</a>
          </li>
          <li className="hover:text-orange-200 transition border-b-cyan-200 border-b">
            <a href="#">Trending</a>
          </li>
          <li className="hover:text-orange-200 transition border-b-cyan-200 border-b">
            <a href="#">Contribute</a>
          </li>
          <li className="hover:text-orange-200 transition border-b-cyan-200 border-b">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
