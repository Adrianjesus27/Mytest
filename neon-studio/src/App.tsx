import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "@/pages/LandingPage"
import DashboardLayout from "@/layouts/DashboardLayout"
import Home from "@/pages/Dashboard/Home"
import GraphicEditor from "@/modules/graphic/GraphicEditor"
import WebEditor from "@/modules/web/WebEditor"
import PhotoEditor from "@/modules/photo/PhotoEditor"
import VideoEditor from "@/modules/video/VideoEditor"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          {/* Add more dashboard routes here like settings, projects */}
        </Route>

        {/* Editor Routes (Standalone Layouts) */}
        <Route path="/studio/graphic/:id" element={<GraphicEditor />} />
        <Route path="/studio/web/:id" element={<WebEditor />} />
        <Route path="/studio/photo/:id" element={<PhotoEditor />} />
        <Route path="/studio/video/:id" element={<VideoEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App