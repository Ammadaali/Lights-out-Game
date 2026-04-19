function Light({ isOn, onClick }) {
    return (
      <div
        onClick={onClick}
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: isOn ? "#ffd700" : "#111",
          border: "1px solid #333",
          cursor: "pointer",
          transition: "0.2s",
          borderRadius: "8px",
          boxShadow: isOn
            ? "0 0 15px #ffd700, 0 0 30px #ffea00"
            : "none",
        }}
      ></div>
    );
  }
  
  export default Light;