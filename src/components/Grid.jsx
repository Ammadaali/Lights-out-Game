import Light from "./Light";

function Grid({ lights, onLightClick }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 60px)",
        gap: "8px",
        justifyContent: "center",
      }}
    >
      {lights.map((light, index) => (
        <Light
          key={index}
          isOn={light}
          onClick={() => onLightClick(index)}
        />
      ))}
    </div>
  );
}

export default Grid;