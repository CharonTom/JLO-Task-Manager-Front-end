import ColorPicker from "../components/ThemePicker";

function Settings() {
  return (
    <section>
      <h1 className="text-skin-base">Settings</h1>
      <p>Current Theme</p>
      <ColorPicker />
    </section>
  );
}

export default Settings;
