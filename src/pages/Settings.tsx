import ThemeSelector from "../components/ThemeSelector";

function Settings() {
  return (
    <section className="section">
      <div className="flex flex-col items-center">
        <h1>Paramètres</h1>
        <ThemeSelector />
      </div>
    </section>
  );
}

export default Settings;
