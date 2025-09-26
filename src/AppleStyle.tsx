import { useState } from 'react';
import { 
  GlassMorphism,
  GlassButton,
  GlassSurface
} from 'react-liquid-glass-kit';
import './AppleStyle.css';

function AppleStyle() {
  const [brightness] = useState(75);
  const [volume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="apple-style-demo">
      {/* Background */}
      <div className="apple-background"></div>
      
      {/* Navigation */}
      <div className="top-bar">
        <div className="top-bar-content">
          <a href="/" className="nav-link">🏠 Dashboard</a>
          <a href="/components" className="nav-link">🧩 Components</a>
          <a href="/apple-style" className="nav-link active">🍎 Apple Style</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="apple-container">
        <div className="apple-header">
          <h1>Apple Liquid Glass</h1>
          <p>Recreating Apple's Control Center with liquid glass effects</p>
        </div>

        <div className="control-center">
          {/* Top Row */}
          <div className="control-row">
            {/* Connectivity Widget */}
            <GlassMorphism variant="medium" className="connectivity-widget">
              <div className="connectivity-grid">
                <div className="connectivity-item active">
                  <div className="connectivity-icon">✈️</div>
                  <span>Airplane</span>
                </div>
                <div className="connectivity-item active">
                  <div className="connectivity-icon">📶</div>
                  <span>Wi-Fi</span>
                </div>
                <div className="connectivity-item active">
                  <div className="connectivity-icon">📡</div>
                  <span>AirDrop</span>
                </div>
                <div className="connectivity-item">
                  <div className="connectivity-icons">
                    <div className="signal-bars">
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                    </div>
                    <div className="bluetooth-icon">🔵</div>
                    <div className="hotspot-icon">🔗</div>
                    <div className="vpn-icon">🌐</div>
                  </div>
                </div>
              </div>
            </GlassMorphism>

            {/* Media Widget */}
            <GlassMorphism variant="medium" className="media-widget">
              <div className="media-content">
                <div className="album-art">
                  <div className="album-placeholder">🎵</div>
                </div>
                <div className="media-info">
                  <div className="track-name">Track</div>
                  <div className="artist-name">Artist</div>
                </div>
                <div className="media-controls">
                  <GlassButton className="media-btn">⏮️</GlassButton>
                  <GlassButton className="media-btn play-btn" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? '⏸️' : '▶️'}
                  </GlassButton>
                  <GlassButton className="media-btn">⏭️</GlassButton>
                </div>
                <div className="airplay-icon">📺</div>
              </div>
            </GlassMorphism>
          </div>

          {/* Middle Row */}
          <div className="control-row">
            {/* System Toggles */}
            <GlassMorphism variant="medium" className="system-toggles">
              <div className="toggle-item">
                <GlassButton className="toggle-btn">
                  <div className="toggle-icon">🔒</div>
                </GlassButton>
                <span>Orientation Lock</span>
              </div>
              <div className="toggle-item">
                <GlassButton className="toggle-btn">
                  <div className="toggle-icon">🔔</div>
                </GlassButton>
                <span>Do Not Disturb</span>
              </div>
              <div className="toggle-item">
                <GlassButton className="focus-btn">
                  <div className="focus-icon">🌙</div>
                  <span>Focus</span>
                  <div className="dropdown-arrow">▼</div>
                </GlassButton>
              </div>
            </GlassMorphism>

            {/* Sliders */}
            <GlassMorphism variant="medium" className="sliders-widget">
              <div className="slider-container">
                <div className="slider brightness-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ height: `${brightness}%` }}
                    ></div>
                  </div>
                  <div className="slider-icon">☀️</div>
                </div>
                <div className="slider volume-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-fill" 
                      style={{ height: `${volume}%` }}
                    ></div>
                  </div>
                  <div className="slider-icon">🔊</div>
                </div>
              </div>
            </GlassMorphism>
          </div>

          {/* Bottom Row */}
          <div className="control-row">
            {/* Smart Home */}
            <GlassMorphism variant="medium" className="smart-home-widget">
              <div className="smart-home-content">
                <div className="device-icon">💡</div>
                <div className="device-info">
                  <div className="device-name">Hallway</div>
                  <div className="device-type">Floor Lamp</div>
                </div>
              </div>
            </GlassMorphism>

            {/* Device Controls */}
            <GlassMorphism variant="medium" className="device-controls">
              <div className="device-controls-grid">
                <GlassButton className="device-btn">
                  <div className="device-icon">📷</div>
                </GlassButton>
                <GlassButton className="device-btn">
                  <div className="device-icon">📺</div>
                </GlassButton>
                <GlassButton className="device-btn">
                  <div className="device-icon">🔋</div>
                </GlassButton>
              </div>
            </GlassMorphism>
          </div>
        </div>

        {/* Advanced Glass Surface Demo */}
        <div className="advanced-demo">
          <h2>Advanced Glass Surface Effects</h2>
          <GlassSurface
            width="100%"
            height={200}
            borderRadius={24}
            displace={20}
            distortionScale={-180}
            redOffset={8}
            greenOffset={15}
            blueOffset={22}
            brightness={65}
            opacity={0.95}
            blur={25}
            mixBlendMode="screen"
          >
            <div className="surface-demo-content">
              <h3>Apple-Style Liquid Glass</h3>
              <p>Advanced displacement and distortion effects with Apple's signature glass morphism</p>
              <div className="demo-features">
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span>Ultra-thin borders</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌊</span>
                  <span>Liquid distortion</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💎</span>
                  <span>Premium glass effect</span>
                </div>
              </div>
            </div>
          </GlassSurface>
        </div>
      </div>
    </div>
  );
}

export default AppleStyle;
