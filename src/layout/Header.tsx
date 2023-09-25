import Nav from "../components/Nav";

function Header() {
  return (
    <header className="w-full z-20 shadow-l bg-skin-variant">
      <div className="container mx-auto flex justify-between items-center py-4 lg:px-10">
        <div>Task Manager</div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
