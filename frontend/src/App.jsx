import { Box } from "@chakra-ui/react";
import { Route, Routes} from 'react-router-dom'
import CreatePage from "./components/pages/CreatePage";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>
  );
}

export default App
