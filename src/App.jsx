function App() {
  const navLinks = [
    {
      label: "Features",
    },
    {
      label: "How It Works",
    },
    {
      label: "Benefits",
    },
    {
      label: "FAQ",
    },
    {
      label: "Become An Agent",
    },
    {
      label: "Contact",
    },
  ];
  return (
    <>
      <nav className="container">
        {navLinks.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}

export default App;
