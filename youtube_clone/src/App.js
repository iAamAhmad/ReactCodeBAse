import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import { Feed, VideoDetail, ChannelDetail, SearchFeed, NotFound, Navbar } from './components';


function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Box>
    </Router>

  );
}

export default App;
