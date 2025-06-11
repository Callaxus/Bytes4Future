"use client";
import React from "react";

// Simple representation: 0 = empty, symbol = element
const table = [
  ["H", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "He"],
  ["Li", "Be", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "B", "C", "N", "O", "F", "Ne"],
  ["Na", "Mg", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Al", "Si", "P", "S", "Cl", "Ar"],
  ["K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr"],
  ["Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe"],
  ["Cs", "Ba", "La", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn"],
  ["Fr", "Ra","Ac", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Fl", "Lv", "Ts", "Og", 0, 0],
  // Lanthanides
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0,0, "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", 0, 0, 0],
  // Actinides
  [0,"Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", 0, 0],
];

export default function PeriodicTable() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(18, 2.5rem)",
      gap: "2px",
      background: "#222",
      padding: "10px",
      borderRadius: "8px"
    }}>
      {table.flat().map((cell, idx) => (
        <div
          key={idx}
          style={{
            width: "2.5rem",
            height: "2.5rem",
            background: cell === 0 ? "#444" : "#fff",
            color: cell === 0 ? "#444" : "#222",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "1px solid #333"
          }}
        >
          {cell !== 0 ? cell : ""}
        </div>
      ))}
    </div>
  );
}