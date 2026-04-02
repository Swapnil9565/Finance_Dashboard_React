import { useApp } from "../../Context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useApp();

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border px-3 py-1 rounded-md"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleSwitcher;