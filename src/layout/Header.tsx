import Nav from "./Nav";

function Header() {
  return (
    <header className="w-full z-20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 lg:px-10">
        <div>Task Manager</div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
