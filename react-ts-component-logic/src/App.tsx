// import { ProgressBar } from "./components/ProgressBar";
import { ProgressBar2 } from "./components/ProgressBar2";
import Solution from "./components/ProgressBar2/Solution.tsx";
// import { Dropdown } from "./hooks/cliclAwayListner";
import { useMediaQuerieMatch } from "./hooks/useMediaQuerie";

function App() {
  const { isMobile, isTablet } = useMediaQuerieMatch();

  console.log({ isMobile, isTablet });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {/* <ProgressBar completion={"20%"} /> */}
      {/* <ProgressBar completion={"50%"} /> */}
      {/* <ProgressBar completion={"100%"} /> */}
      {/* <Dropdown /> */}
      <ProgressBar2 completion={"70%"} />
      <Solution />
    </div>
  );
}

export default App;