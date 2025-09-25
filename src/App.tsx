import { useState } from 'react';
import { 
  GlassMorphism,
  GlassModal,
  GlassSidebar,
  GlassButton,
  GlassSurface
} from 'react-liquid-glass-kit';
import { 
  Home, 
  Puzzle, 
  Apple, 
  Search, 
  Bell, 
  Settings, 
  Smartphone,
  User,
  Plus,
  Video,
  Mic,
  Power,
  Fan,
  Timer,
  Monitor,
  Lightbulb,
  Wifi,
  Music,
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Bed,
  Trash2
} from 'lucide-react';
import './App.css';

// Simple routing
const getCurrentPage = () => {
  const path = window.location.pathname;
  if (path === '/components') return 'components';
  if (path === '/apple-style') return 'apple-style';
  return 'dashboard';
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [acTemp] = useState(18);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime] = useState('1:30');
  const [totalTime] = useState('3:56');
  
  const currentPage = getCurrentPage();

  return (
    <div className="smart-home-dashboard">
      {/* Background Image */}
      <div className="background-image"></div>
      
      {/* Top Global Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <a href="/" className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}>
            <Home size={18} />
            Dashboard
          </a>
          <a href="/components" className={`nav-link ${currentPage === 'components' ? 'active' : ''}`}>
            <Puzzle size={18} />
            Components
          </a>
          <a href="/apple-style" className={`nav-link ${currentPage === 'apple-style' ? 'active' : ''}`}>
            <Apple size={18} />
            Apple Style
          </a>
          <div className="search-icon">
            <Search size={18} />
          </div>
          <div className="notifications-icon">
            <Bell size={18} />
          </div>
          <GlassButton 
            className="modal-trigger-btn"
            onClick={() => setShowModal(true)}
          >
            <Settings size={16} />
            Settings
          </GlassButton>
          <GlassButton 
            className="sidebar-trigger-btn"
            onClick={() => setShowSidebar(true)}
          >
            <Smartphone size={16} />
            Devices
          </GlassButton>
        </div>
      </div>

      {/* Left Information Panel */}
      <div className="left-panel">
        <GlassMorphism variant="medium" className="info-panel">
          <h1 className="greeting">Good Morning Zia!</h1>
          <p className="theme-status">Laid-back Eco Home Vibes</p>
          
          <div className="members-section">
            <h3>Members</h3>
            <div className="member-avatars">
              <div className="avatar"><User size={20} /></div>
              <div className="avatar"><User size={20} /></div>
              <div className="avatar"><User size={20} /></div>
              <div className="avatar"><User size={20} /></div>
              <div className="add-member"><Plus size={20} /></div>
            </div>
          </div>
        </GlassMorphism>
      </div>

      {/* Main Widget Grid */}
      <div className="main-grid">
        
        {/* Camera Feed Widget */}
        <GlassMorphism variant="medium" className="camera-widget">
          <div className="camera-header">
            <h3>Camera 1</h3>
            <div className="live-indicator">
              <div className="live-dot"></div>
              <span>Live</span>
            </div>
          </div>
          <div className="camera-feed">
            <div className="camera-placeholder">
              <div className="camera-content">
                <div className="sofa">🛋️</div>
                <div className="table">🪑</div>
                <div className="tv-stand">📺</div>
              </div>
            </div>
          </div>
          <div className="camera-controls">
            <GlassButton className="control-btn"><Video size={20} /></GlassButton>
            <GlassButton className="control-btn"><Mic size={20} /></GlassButton>
            <GlassButton className="control-btn"><Settings size={20} /></GlassButton>
          </div>
        </GlassMorphism>

        {/* Weather Widget */}
        <GlassMorphism variant="medium" className="weather-widget">
          <div className="weather-header">
            <div className="current-weather">
              <div className="temp">23°C | °F</div>
              <div className="weather-icon">☀️</div>
              <div className="condition">Sun</div>
            </div>
            <div className="date">Friday 20 June 2025</div>
          </div>
          <div className="weather-details">
            <div className="detail">
              <span>💧</span>
              <span>56% Humidity</span>
            </div>
            <div className="detail">
              <span>💨</span>
              <span>25 km/h Wind Speed</span>
            </div>
          </div>
          <div className="forecast">
            <div className="forecast-day">
              <div>Sat</div>
              <div>☀️</div>
              <div>30° | 22°</div>
            </div>
            <div className="forecast-day">
              <div>Sun</div>
              <div>⛅</div>
              <div>28° | 20°</div>
            </div>
            <div className="forecast-day">
              <div>Mon</div>
              <div>☀️</div>
              <div>32° | 24°</div>
            </div>
            <div className="forecast-day">
              <div>Tue</div>
              <div>⛅</div>
              <div>29° | 21°</div>
            </div>
          </div>
        </GlassMorphism>

        {/* Air Conditioner Widget */}
        <GlassMorphism variant="medium" className="ac-widget">
          <div className="ac-header">
            <div className="ac-status">
              <div className="status-dot green"></div>
              <div>
                <div className="device-name">Air Conditioner</div>
                <div className="device-location">Living Room</div>
              </div>
            </div>
            <GlassButton className="power-btn"><Power size={20} /></GlassButton>
          </div>
          <div className="temperature-dial">
            <div className="dial">
              <div className="dial-handle" style={{ transform: `rotate(${(acTemp - 16) * 18}deg)` }}></div>
              <div className="dial-temp">{acTemp}°</div>
            </div>
          </div>
          <div className="ac-controls">
            <GlassButton className="ac-control"><Fan size={16} /> Fan</GlassButton>
            <GlassButton className="ac-control"><Timer size={16} /> Timer</GlassButton>
            <GlassButton className="ac-control">Mode</GlassButton>
          </div>
        </GlassMorphism>

        {/* TV Widget */}
        <GlassMorphism variant="medium" className="tv-widget">
          <div className="tv-header">
            <div>
              <div className="device-name">TV</div>
              <div className="device-location">Singer SmartTV</div>
            </div>
            <GlassButton className="power-btn"><Power size={20} /></GlassButton>
          </div>
          <div className="streaming-apps">
            <div className="app-logo netflix">N</div>
            <div className="app-logo prime">prime</div>
            <div className="app-logo apple"><Apple size={16} /></div>
            <div className="app-logo hbo">HBO max</div>
            <div className="add-app"><Plus size={16} /></div>
          </div>
        </GlassMorphism>

        {/* Ambient LED Widget */}
        <GlassMorphism variant="medium" className="led-widget">
          <div className="led-header">
            <div className="led-status">
              <div className="status-dot green"></div>
              <div>
                <div className="device-name">Ambient LED</div>
                <div className="device-location">Living room ambiance</div>
              </div>
            </div>
            <GlassButton className="power-btn"><Power size={20} /></GlassButton>
          </div>
          <div className="color-selector">
            <div className="color-label">Colors</div>
            <div className="color-bar">
              <div className="color-segment red"></div>
              <div className="color-segment orange"></div>
              <div className="color-segment yellow"></div>
              <div className="color-segment green"></div>
              <div className="color-segment blue"></div>
              <div className="color-segment purple"></div>
            </div>
          </div>
        </GlassMorphism>

        {/* Alexa Widget */}
        <GlassMorphism variant="medium" className="alexa-widget">
          <div className="alexa-header">
            <div className="device-name">Alexa</div>
            <GlassButton className="power-btn"><Power size={20} /></GlassButton>
          </div>
          <div className="alexa-display">
            <div className="alexa-time">9:00</div>
          </div>
        </GlassMorphism>

        {/* WiFi Widget */}
        <GlassMorphism variant="medium" className="wifi-widget">
          <div className="wifi-header">
            <div className="device-name">WiFi</div>
            <GlassButton className="power-btn"><Power size={20} /></GlassButton>
          </div>
          <div className="wifi-icon"><Wifi size={32} /></div>
        </GlassMorphism>

        {/* Music Player Widget */}
        <GlassMorphism variant="medium" className="music-widget">
          <div className="music-header">
            <div className="song-info">
              <div className="artist">Arash</div>
              <div className="song-title">One day I'm gonna fly away</div>
            </div>
          </div>
          <div className="album-art">
            <div className="album-cover">ARASH</div>
          </div>
          <div className="music-controls">
            <GlassButton className="music-btn"><Shuffle size={18} /></GlassButton>
            <GlassButton className="music-btn"><SkipBack size={18} /></GlassButton>
            <GlassButton className="music-btn play-btn" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </GlassButton>
            <GlassButton className="music-btn"><SkipForward size={18} /></GlassButton>
            <GlassButton className="music-btn"><Repeat size={18} /></GlassButton>
          </div>
          <div className="progress-bar">
            <div className="progress-time">{currentTime}</div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '40%' }}></div>
            </div>
            <div className="progress-time">{totalTime}</div>
          </div>
        </GlassMorphism>

        {/* Advanced Glass Surface Examples */}
        <GlassSurface
          width="100%"
          height={200}
          borderRadius={20}
          displace={15}
          distortionScale={-150}
          redOffset={5}
          greenOffset={10}
          blueOffset={15}
          brightness={60}
          opacity={0.9}
          blur={20}
          mixBlendMode="screen"
          style={{ marginBottom: '20px' }}
        >
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h2 style={{ color: 'white', margin: '0 0 15px 0', fontSize: '1.8rem' }}>
              Advanced Glass Surface Effects
            </h2>
            <p style={{ color: 'white', margin: '0 0 20px 0', fontSize: '1.1rem' }}>
              Experience the power of advanced displacement and distortion effects
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', maxWidth: '800px', margin: '0 auto' }}>
              
              <GlassSurface 
                width={180} 
                height={80}
                borderRadius={16}
                displace={8}
                brightness={55}
                opacity={0.85}
                blur={15}
              >
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '0.9rem' }}>Basic Effect</h4>
                  <p style={{ color: 'white', margin: 0, fontSize: '0.8rem' }}>Subtle distortion</p>
                </div>
              </GlassSurface>

              <GlassSurface
                width={180}
                height={80}
                borderRadius={16}
                displace={20}
                distortionScale={-180}
                redOffset={8}
                greenOffset={15}
                blueOffset={22}
                brightness={65}
                opacity={0.95}
                blur={18}
                mixBlendMode="screen"
              >
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '0.9rem' }}>Advanced</h4>
                  <p style={{ color: 'white', margin: 0, fontSize: '0.8rem' }}>Complex effects</p>
                </div>
              </GlassSurface>

              <GlassSurface
                width={180}
                height={80}
                borderRadius={16}
                blur={25}
                brightness={75}
                opacity={0.95}
                saturation={1.8}
                displace={12}
              >
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '0.9rem' }}>High Blur</h4>
                  <p style={{ color: 'white', margin: 0, fontSize: '0.8rem' }}>Maximum blur</p>
                </div>
              </GlassSurface>

              <GlassSurface
                width={180}
                height={80}
                borderRadius={16}
                displace={25}
                distortionScale={-200}
                redOffset={10}
                greenOffset={18}
                blueOffset={25}
                brightness={80}
                opacity={0.98}
                blur={15}
                mixBlendMode="difference"
              >
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '0.9rem' }}>Dramatic</h4>
                  <p style={{ color: 'white', margin: 0, fontSize: '0.8rem' }}>Maximum impact</p>
                </div>
              </GlassSurface>
            </div>
          </div>
        </GlassSurface>

      </div>

      {/* Bottom Navigation Bar */}
      <div className="bottom-bar">
        <div className="room-selector">
          <GlassButton className="room-btn">
            <span>🛋️</span>
            <span>Living room</span>
          </GlassButton>
        </div>
        <div className="device-categories">
          <GlassButton className="category-btn"><Bed size={20} /></GlassButton>
          <GlassButton className="category-btn"><Trash2 size={20} /></GlassButton>
          <GlassButton className="category-btn"><Plus size={20} /></GlassButton>
        </div>
      </div>

      {/* Glass Modal */}
      <GlassModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        className="settings-modal"
      >
        <h2>Device Settings</h2>
        <p>Configure your smart home devices</p>
        <div className="modal-controls">
          <GlassButton onClick={() => setShowModal(false)}>Close</GlassButton>
          <GlassButton onClick={() => alert('Settings saved!')}>Save</GlassButton>
        </div>
      </GlassModal>

      {/* Glass Sidebar */}
      <GlassSidebar
        isOpen={showSidebar}
        onClose={() => setShowSidebar(false)}
        className="device-sidebar"
      >
        <h2>All Devices</h2>
        <div className="device-list">
          <div className="device-item">
            <Monitor size={20} />
            <span>Smart TV</span>
          </div>
          <div className="device-item">
            <span>❄️</span>
            <span>Air Conditioner</span>
          </div>
          <div className="device-item">
            <Lightbulb size={20} />
            <span>Smart Lights</span>
          </div>
          <div className="device-item">
            <Music size={20} />
            <span>Alexa</span>
          </div>
        </div>
        <GlassButton onClick={() => setShowSidebar(false)}>Close</GlassButton>
      </GlassSidebar>
    </div>
  );
}

export default App;