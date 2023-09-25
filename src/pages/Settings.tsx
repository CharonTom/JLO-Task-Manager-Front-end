import ColorPicker from "../components/ThemePicker";

function Settings() {
  return (
    <section className="section">
      <div className="flex flex-col items-center">
        <h1>Settings</h1>
        <ColorPicker />
      </div>
    </section>
  );
}

export default Settings;
