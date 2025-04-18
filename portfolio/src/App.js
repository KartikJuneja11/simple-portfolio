function App() {

  const navLinks = [
    {name: 'Home', href: '#home'},
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'}
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* navigation */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">My Portfolio</h1>

          <nav>
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                  href={link.href} 
                  className="px-2 py-1 rounded hover:bg-gray-200 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="py-20 bg-blue-50">
        <div className="container mx-auto py-4 text-center">
          <h1 className="text-4xl font-bold mb-4">John Doe</h1>
          <p className="text-xl mb-8">Web Developer</p>
        </div>
      </section>

      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;