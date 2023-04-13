import React from "react";

const Darktoggle = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div>
      <div className="flex items-center">
        <label class="toggleDarkBtn">
          <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
          <span class="slideBtnTg round"></span>
        </label>
      </div>
    </div>
  );
};

export default Darktoggle;
