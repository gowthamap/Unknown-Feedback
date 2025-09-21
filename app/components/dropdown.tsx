"use client";
import { useState } from "react";

export default function CustomDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const names = ["John", "Mary", "Alex", "Sara"];

  return (
    <div className="relative w-full">
      <h2 className="mb-2 font-medium">Feedback recipient(s)</h2>

      {/* Dropdown button */}
      <button
        type="button"
        className="w-full border border-blue-300 rounded-xl p-3 text-left bg-white focus:ring-2 focus:ring-blue-500"
        onClick={() => setOpen(!open)}
      >
        {selected || "Select a name"}
      </button>

      {/* Dropdown options */}
      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-blue-300 rounded-xl shadow-lg">
          {names.map((name) => (
            <li
              key={name}
              className="p-3 hover:bg-blue-100 cursor-pointer rounded-xl"
              onClick={() => {
                setSelected(name);
                setOpen(false);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
