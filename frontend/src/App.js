import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to the static single-file Sawaa Enterprise site
    window.location.replace("/sawaa.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0E0F11",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        letterSpacing: "0.2em",
        fontSize: "12px",
        textTransform: "uppercase",
      }}
      data-testid="redirect-loader"
    >
      Loading Sawaa Enterprise…
    </div>
  );
}

export default App;
