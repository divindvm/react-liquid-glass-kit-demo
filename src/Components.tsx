import { useState } from 'react';
import {
  GlassCard,
  GlassButton,
  GlassInput,
  GlassTooltip,
  GlassSurface,
  GlassModal,
  GlassSidebar,
  GlassRadio,
  GlassCheckbox,
  GlassChip,
  GlassToast
} from 'react-liquid-glass-kit';
import GlassPropertiesControl from './components/GlassPropertiesControl';
import CodeSnippet from './components/CodeSnippet';
import { 
  Home, 
  Search, 
  Bell, 
  Settings, 
  User,
  Plus,
  Power,
  Monitor,
  Lightbulb,
  Music,
  Play,
  Pause,
  Sliders,
  Palette,
  Zap,
  Eye,
  EyeOff,
  Menu,
  CheckSquare,
  Square,
  Circle,
  Tag,
  MessageSquare,
  FileText,
  HelpCircle,
  Package,
  Github,
  BookOpen
} from 'lucide-react';
import './Components.css';
import './components/GlassPropertiesControl.css';
import './components/CodeSnippet.css';

type ComponentCategory = 
  | 'overview' 
  | 'buttons' 
  | 'inputs' 
  | 'cards' 
  | 'modals' 
  | 'sidebars' 
  | 'radio' 
  | 'checkbox' 
  | 'chips' 
  | 'toast' 
  | 'tooltip' 
  | 'preview'
  | 'documentation';

function Components() {
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>('overview');
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [checkboxValues, setCheckboxValues] = useState({
    option1: false,
    option2: false,
    option3: false
  });
  const [chips, setChips] = useState(['React', 'TypeScript', 'Glass']);
  const [toasts, setToasts] = useState<Array<{id: number, type: 'success' | 'error' | 'warning' | 'info', message: string}>>([]);
  
  // Glass Surface Properties
  const [glassProps, setGlassProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    distortionScale: -150,
    redOffset: 5,
    greenOffset: 10,
    blueOffset: 15,
    saturation: 1.5,
    borderRadius: 24
  });

  const updateGlassProp = (prop: string, value: number) => {
    setGlassProps(prev => ({ ...prev, [prop]: value }));
  };

  // Glass properties for each component section
  const [buttonProps, setButtonProps] = useState({
    backdropBlur: 20,
    backdropBrightness: 60,
    opacity: 0.9,
    borderRadius: 24,
    backdropSaturate: 1.8
  });

  const [inputProps, setInputProps] = useState({
    backdropBlur: 20,
    backdropBrightness: 60,
    opacity: 0.9,
    borderRadius: 24,
    backdropSaturate: 1.8
  });

  const [cardProps, setCardProps] = useState({
    backdropBlur: 20,
    backdropBrightness: 60,
    opacity: 0,
    displace: 8,
    borderRadius: 24,
    backdropSaturate: 1.8
  });

  const [modalProps, setModalProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });


  // Background switcher state
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgrounds = ['bg.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg'];

  const switchBackground = () => {
    setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
  };

  const addToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const removeChip = (index: number) => {
    setChips(prev => prev.filter((_, i) => i !== index));
  };

  const addChip = () => {
    const newChip = `Chip ${chips.length + 1}`;
    setChips(prev => [...prev, newChip]);
  };

  const categories = [
    { id: 'overview' as ComponentCategory, label: 'Overview', icon: Home },
    { id: 'buttons' as ComponentCategory, label: 'Buttons', icon: Power },
    { id: 'inputs' as ComponentCategory, label: 'Inputs', icon: FileText },
    { id: 'cards' as ComponentCategory, label: 'Cards', icon: Square },
    { id: 'modals' as ComponentCategory, label: 'Modals', icon: Monitor },
    { id: 'sidebars' as ComponentCategory, label: 'Sidebars', icon: Menu },
    { id: 'radio' as ComponentCategory, label: 'Radio', icon: Circle },
    { id: 'checkbox' as ComponentCategory, label: 'Checkbox', icon: CheckSquare },
    { id: 'chips' as ComponentCategory, label: 'Chips', icon: Tag },
    { id: 'toast' as ComponentCategory, label: 'Toast', icon: MessageSquare },
    { id: 'tooltip' as ComponentCategory, label: 'Tooltip', icon: HelpCircle },
    { id: 'preview' as ComponentCategory, label: 'Live Preview', icon: Eye },
    { id: 'documentation' as ComponentCategory, label: 'Documentation', icon: BookOpen }
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'overview':
        return (
          <div className="content-section">
            <h1>Glass Morphism Components</h1>
            <p>Explore our comprehensive collection of glass morphism UI components</p>
            
            <div className="overview-grid">
              {categories.slice(1).map(category => (
                <div
                  key={category.id}
                  className="overview-card"
                  onClick={() => setActiveCategory(category.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <GlassSurface
                    width="100%"
                    height="auto"
                    borderRadius={20}
                    displace={8}
                    blur={20}
                    brightness={60}
                    opacity={0.9}
                  >
                    <category.icon size={32} />
                    <h3>{category.label}</h3>
                    <p>Interactive {category.label.toLowerCase()} with glass effects</p>
                  </GlassSurface>
                </div>
              ))}
            </div>
          </div>
        );

      case 'buttons':
        return (
          <div className="content-section">
            <h1>Glass Buttons</h1>
            <p>Various button styles with glass morphism effects</p>
            
            <GlassPropertiesControl
              properties={buttonProps}
              onPropertyChange={(prop, value) => setButtonProps(prev => ({ ...prev, [prop]: value }))}
            />
            
            <div className="button-showcase-container">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={buttonProps.borderRadius}
                blur={buttonProps.backdropBlur}
                brightness={buttonProps.backdropBrightness}
                opacity={buttonProps.opacity}
                saturation={buttonProps.backdropSaturate}
                className="component-card"
              >
                <h3>Primary Buttons</h3>
                <p>Main action buttons with glass effects</p>
                <div className="button-showcase">
                <GlassButton
                  style={{
                    background: `rgba(255, 255, 255, 0.1)`,
                    border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
                    borderRadius: `${buttonProps.borderRadius}px`,
                    backdropFilter: `blur(${buttonProps.backdropBlur}px) saturate(${buttonProps.backdropSaturate}) brightness(${buttonProps.backdropBrightness}%) contrast(1.2)`
                  }}
                >
                  Primary Button
                </GlassButton>
                  <GlassButton 
                    className="secondary"
                    style={{
                      background: `rgba(108, 117, 125, 0.1)`,
                      border: `0.5px solid rgba(108, 117, 125, 0.4)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
                      borderRadius: `${buttonProps.borderRadius}px`,
                      backdropFilter: `blur(${buttonProps.backdropBlur}px) saturate(${buttonProps.backdropSaturate}) brightness(${buttonProps.backdropBrightness}%) contrast(1.2)`
                    }}
                  >
                    Secondary
                  </GlassButton>
                  <GlassButton 
                    className="success"
                    style={{
                      background: `rgba(40, 167, 69, 0.1)`,
                      border: `0.5px solid rgba(40, 167, 69, 0.4)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
                      borderRadius: `${buttonProps.borderRadius}px`,
                      backdropFilter: `blur(${buttonProps.backdropBlur}px) saturate(${buttonProps.backdropSaturate}) brightness(${buttonProps.backdropBrightness}%) contrast(1.2)`
                    }}
                  >
                    Success
                  </GlassButton>
                  <GlassButton 
                    className="danger"
                    style={{
                      background: `rgba(220, 53, 69, 0.1)`,
                      border: `0.5px solid rgba(220, 53, 69, 0.4)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
                      borderRadius: `${buttonProps.borderRadius}px`,
                      backdropFilter: `blur(${buttonProps.backdropBlur}px) saturate(${buttonProps.backdropSaturate}) brightness(${buttonProps.backdropBrightness}%) contrast(1.2)`
                    }}
                  >
                    Danger
                  </GlassButton>
                </div>
              </GlassSurface>

              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={buttonProps.borderRadius}
                blur={buttonProps.backdropBlur}
                brightness={buttonProps.backdropBrightness}
                opacity={buttonProps.opacity}
                saturation={buttonProps.backdropSaturate}
                className="component-card"
              >
                <h3>Icon Buttons</h3>
                <p>Buttons with icons for better UX</p>
                <div className="icon-button-showcase">
                  <GlassButton 
                    className="icon-btn"
                    style={{
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
                      borderRadius: `${buttonProps.borderRadius}px`,
                      backdropFilter: `blur(${buttonProps.backdropBlur}px) saturate(${buttonProps.backdropSaturate}) brightness(${buttonProps.backdropBrightness}%) contrast(1.2)`
                    }}
                  >
                    <Play size={20} />
                  </GlassButton>
                  <GlassButton 
                    className="icon-btn"
                    style={{
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
                      borderRadius: `${buttonProps.borderRadius}px`,
                      backdropFilter: `blur(${buttonProps.backdropBlur}px) saturate(${buttonProps.backdropSaturate}) brightness(${buttonProps.backdropBrightness}%) contrast(1.2)`
                    }}
                  >
                    <Pause size={20} />
                  </GlassButton>
                  <GlassButton 
                    className="icon-btn"
                    style={{
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
                      borderRadius: `${buttonProps.borderRadius}px`,
                      backdropFilter: `blur(${buttonProps.backdropBlur}px) saturate(${buttonProps.backdropSaturate}) brightness(${buttonProps.backdropBrightness}%) contrast(1.2)`
                    }}
                  >
                    <Settings size={20} />
                  </GlassButton>
                  <GlassButton 
                    className="icon-btn"
                    style={{
                      backdropFilter: `blur(${buttonProps.backdropBlur}px) saturate(${buttonProps.backdropSaturate}) brightness(${buttonProps.backdropBrightness}%) contrast(1.2)`,
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
                      borderRadius: `${buttonProps.borderRadius}px`
                    }}
                  >
                    <Power size={20} />
                  </GlassButton>
                </div>
              </GlassSurface>
            </div>

            <CodeSnippet
              code={`<GlassButton
  glowColor="white"
  glowEffects={true}
  style={{
    borderRadius: ${buttonProps.borderRadius}px,
    backdropFilter: \`blur(\${${buttonProps.backdropBlur}}px) saturate(\${${buttonProps.backdropSaturate}}) brightness(\${${buttonProps.backdropBrightness}}%) contrast(1.2)\`,
    background: \`rgba(255, 255, 255, ${buttonProps.opacity})\`,
    border: \`0.5px solid rgba(255, 255, 255, 0.18)\`,
    boxShadow: \`0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)\`
  }}
>
  Primary Button
</GlassButton>`}
              language="tsx"
              title="GlassButton Code Example"
            />
          </div>
        );

      case 'inputs':
        return (
          <div className="content-section">
            <h1>Glass Inputs</h1>
            <p>Input fields with glass styling and effects</p>
            
            <GlassPropertiesControl
              properties={inputProps}
              onPropertyChange={(prop, value) => setInputProps(prev => ({ ...prev, [prop]: value }))}
            />
            
            <div className="component-grid">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={inputProps.borderRadius}
                blur={inputProps.backdropBlur}
                brightness={inputProps.backdropBrightness}
                opacity={inputProps.opacity}
                saturation={inputProps.backdropSaturate}
                className="component-card"
              >
                <h3>Text Inputs</h3>
                <p>Input fields with glass styling</p>
                <div className="input-showcase">
                  <div className="input-field">
                    <label className="input-label">Name</label>
                    <GlassInput 
                      placeholder="Enter your name"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      style={{
                        borderRadius: `${inputProps.borderRadius}px`,
                        backdropFilter: `blur(${inputProps.backdropBlur}px) saturate(${inputProps.backdropSaturate}) brightness(${inputProps.backdropBrightness}%) contrast(1.2)`,
                        background: `rgba(255, 255, 255, ${inputProps.opacity})`,
                        border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                        color: 'white'
                      }}
                    />
                  </div>
                  <div className="input-field">
                    <label className="input-label">Email</label>
                    <GlassInput 
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        borderRadius: `${inputProps.borderRadius}px`,
                        backdropFilter: `blur(${inputProps.backdropBlur}px) saturate(${inputProps.backdropSaturate}) brightness(${inputProps.backdropBrightness}%) contrast(1.2)`,
                        background: `rgba(255, 255, 255, ${inputProps.opacity})`,
                        border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                        color: 'white'
                      }}
                    />
                  </div>
                  <div className="input-field">
                    <label className="input-label">Password</label>
                    <GlassInput 
                      type="password"
                      placeholder="Enter password"
                      style={{
                        borderRadius: `${inputProps.borderRadius}px`,
                        backdropFilter: `blur(${inputProps.backdropBlur}px) saturate(${inputProps.backdropSaturate}) brightness(${inputProps.backdropBrightness}%) contrast(1.2)`,
                        background: `rgba(255, 255, 255, ${inputProps.opacity})`,
                        border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                        color: 'white'
                      }}
                    />
                  </div>
                </div>
              </GlassSurface>

              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={inputProps.borderRadius}
                blur={inputProps.backdropBlur}
                brightness={inputProps.backdropBrightness}
                opacity={inputProps.opacity}
                saturation={inputProps.backdropSaturate}
                className="component-card"
              >
                <h3>Search Input</h3>
                <p>Specialized search input with icon</p>
                <div className="search-input-showcase">
                  <div className="search-input-container">
                    <Search size={20} />
                    <GlassInput 
                      placeholder="Search components..."
                      className="search-input"
                      style={{
                        borderRadius: `${inputProps.borderRadius}px`,
                        backdropFilter: `blur(${inputProps.backdropBlur}px) saturate(${inputProps.backdropSaturate}) brightness(${inputProps.backdropBrightness}%) contrast(1.2)`,
                        background: `rgba(255, 255, 255, ${inputProps.opacity})`,
                        border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                        color: 'white'
                      }}
                    />
                  </div>
                </div>
              </GlassSurface>
            </div>

            <CodeSnippet
              code={`<GlassInput 
  placeholder="Enter your name"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  style={{
    borderRadius: ${inputProps.borderRadius}px,
    backdropFilter: \`blur(\${${inputProps.backdropBlur}}px) saturate(\${${inputProps.backdropSaturate}}) brightness(\${${inputProps.backdropBrightness}}%) contrast(1.2)\`,
    background: \`rgba(255, 255, 255, ${inputProps.opacity})\`,
    border: \`0.5px solid rgba(255, 255, 255, 0.18)\`,
    boxShadow: \`0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)\`
  }}
/>`}
              language="tsx"
              title="GlassInput Code Example"
            />
          </div>
        );

      case 'cards':
        return (
          <div className="content-section">
            <h1>Glass Cards</h1>
            <p>Card components with glass morphism effects</p>
            
            <GlassPropertiesControl
              properties={cardProps}
              onPropertyChange={(prop, value) => setCardProps(prev => ({ ...prev, [prop]: value }))}
            />
            
            <div className="component-grid">
              <GlassCard 
                className="component-card"
                style={{
                  borderRadius: `${cardProps.borderRadius}px`,
                  backdropFilter: `blur(${cardProps.backdropBlur}px) saturate(${cardProps.backdropSaturate}) brightness(${cardProps.backdropBrightness}%) contrast(1.2)`,
                  background: `rgba(255, 255, 255, ${cardProps.opacity})`,
                  border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                }}
              >
                <div className="card-header">
                  <User size={24} />
                  <h3>User Card</h3>
                </div>
                <p>This is a glass card component with user information</p>
                <div className="card-actions">
                  <GlassButton>View Profile</GlassButton>
                  <GlassButton className="secondary">Edit</GlassButton>
                </div>
              </GlassCard>

              <GlassCard 
                className="component-card"
                style={{
                  borderRadius: `${cardProps.borderRadius}px`,
                  backdropFilter: `blur(${cardProps.backdropBlur}px) saturate(${cardProps.backdropSaturate}) brightness(${cardProps.backdropBrightness}%) contrast(1.2)`,
                  background: `rgba(255, 255, 255, ${cardProps.opacity})`,
                  border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                }}
              >
                <div className="card-header">
                  <Settings size={24} />
                  <h3>Settings Card</h3>
                </div>
                <p>Configuration options with glass styling</p>
                <div className="card-actions">
                  <GlassButton>Save Changes</GlassButton>
                  <GlassButton className="secondary">Reset</GlassButton>
                </div>
              </GlassCard>
            </div>

            <CodeSnippet
              code={`<GlassCard 
  className="component-card"
  style={{
    borderRadius: \`${cardProps.borderRadius}px\`,
    backdropFilter: \`blur(\${${cardProps.backdropBlur}}px) saturate(\${${cardProps.backdropSaturate}}) brightness(\${${cardProps.backdropBrightness}}%) contrast(1.2)\`,
    background: \`rgba(255, 255, 255, ${cardProps.opacity})\`,
    border: \`0.5px solid rgba(255, 255, 255, 0.18)\`,
    boxShadow: \`0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)\`
  }}
>
  <div className="card-header">
    <User size={24} />
    <h3>User Card</h3>
  </div>
  <p>This is a glass card component with user information</p>
  <div className="card-actions">
    <GlassButton>View Profile</GlassButton>
    <GlassButton className="secondary">Edit</GlassButton>
  </div>
</GlassCard>`}
              language="tsx"
              title="GlassCard Code Example"
            />
          </div>
        );

      case 'modals':
        return (
          <div className="content-section">
            <h1>Glass Modals</h1>
            <p>Modal dialogs with glass overlay effects</p>
            
            <GlassPropertiesControl
              properties={{
                backdropBlur: modalProps.blur,
                backdropBrightness: modalProps.brightness,
                opacity: modalProps.opacity,
                borderRadius: modalProps.borderRadius,
                backdropSaturate: modalProps.saturation
              }}
              onPropertyChange={(prop, value) => setModalProps(prev => ({ ...prev, [prop]: value }))}
            />
            
            <div className="component-grid">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={modalProps.borderRadius}
                displace={modalProps.displace}
                blur={modalProps.blur}
                brightness={modalProps.brightness}
                opacity={modalProps.opacity}
                saturation={modalProps.saturation}
                className="component-card modal-showcase"
              >
                <h3>Modal Demo</h3>
                <p>Click the button to open a glass modal</p>
                <div className="button-showcase">
                  <GlassButton onClick={() => setShowModal(true)}>
                    Open Modal
                  </GlassButton>
                </div>
              </GlassSurface>
            </div>

            <GlassModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            >
              <h2>Glass Modal</h2>
              <p>This is a modal with glass morphism effects</p>
              <div className="modal-controls">
                <GlassButton onClick={() => setShowModal(false)}>Close</GlassButton>
                <GlassButton onClick={() => alert('Action completed!')}>Confirm</GlassButton>
              </div>
            </GlassModal>

            <CodeSnippet
              code={`<GlassModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  style={{
    borderRadius: \`${modalProps.borderRadius}px\`,
    backdropFilter: \`blur(\${${modalProps.blur}}px) saturate(\${${modalProps.saturation}}) brightness(\${${modalProps.brightness}}%) contrast(1.2)\`,
    background: \`rgba(255, 255, 255, ${modalProps.opacity})\`,
    border: \`0.5px solid rgba(255, 255, 255, 0.18)\`,
    boxShadow: \`0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)\`
  }}
>
  <h2>Glass Modal</h2>
  <p>This is a modal with glass morphism effects</p>
  <div className="modal-controls">
    <GlassButton onClick={() => setShowModal(false)}>Close</GlassButton>
    <GlassButton onClick={() => alert('Action completed!')}>Confirm</GlassButton>
  </div>
</GlassModal>`}
              language="tsx"
              title="GlassModal Code Example"
            />
          </div>
        );

      case 'sidebars':
        return (
          <div className="content-section">
            <h1>Glass Sidebars</h1>
            <p>Sidebar components with glass overlay effects</p>
            
            <div className="component-grid">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card sidebar-showcase"
              >
                <h3>Sidebar Demo</h3>
                <p>Click the button to open a glass sidebar</p>
                <div className="button-showcase">
                  <GlassButton onClick={() => setShowSidebar(true)}>
                    Open Sidebar
                  </GlassButton>
                </div>
              </GlassSurface>
            </div>

            <GlassSidebar
              isOpen={showSidebar}
              onClose={() => setShowSidebar(false)}
              position="right"
              width="400px"
            >
              <h2>Glass Sidebar</h2>
              <div className="device-list">
                <div className="device-item">
                  <Monitor size={20} />
                  <span>Smart TV</span>
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

      case 'radio':
        return (
          <div className="content-section">
            <h1>Glass Radio Buttons</h1>
            <p>Radio button components with glass styling</p>
            
            <div className="component-grid">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>Radio Group</h3>
                <p>Select one option from the group</p>
                <div className="radio-showcase">
                  <GlassRadio
                    name="options"
                    value="option1"
                    checked={radioValue === 'option1'}
                    onChange={setRadioValue}
                    label="Option 1"
                  />
                  <GlassRadio
                    name="options"
                    value="option2"
                    checked={radioValue === 'option2'}
                    onChange={setRadioValue}
                    label="Option 2"
                  />
                  <GlassRadio
                    name="options"
                    value="option3"
                    checked={radioValue === 'option3'}
                    onChange={setRadioValue}
                    label="Option 3"
                  />
                </div>
              </GlassSurface>
            </div>
          </div>
        );

      case 'checkbox':
        return (
          <div className="content-section">
            <h1>Glass Checkboxes</h1>
            <p>Checkbox components with glass styling</p>
            
            <div className="component-grid">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>Checkbox Group</h3>
                <p>Select multiple options</p>
                <div className="checkbox-showcase">
                  <GlassCheckbox
                    checked={checkboxValues.option1}
                    onChange={(checked) => setCheckboxValues(prev => ({ ...prev, option1: checked }))}
                    label="Option 1"
                  />
                  <GlassCheckbox
                    checked={checkboxValues.option2}
                    onChange={(checked) => setCheckboxValues(prev => ({ ...prev, option2: checked }))}
                    label="Option 2"
                  />
                  <GlassCheckbox
                    checked={checkboxValues.option3}
                    onChange={(checked) => setCheckboxValues(prev => ({ ...prev, option3: checked }))}
                    label="Option 3"
                  />
                </div>
              </GlassSurface>
            </div>
          </div>
        );

      case 'chips':
        return (
          <div className="content-section">
            <h1>Glass Chips</h1>
            <p>Chip components with glass styling and removal</p>
            
            <div className="component-grid">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>Chip Collection</h3>
                <p>Interactive chips with different variants</p>
                <div className="chip-showcase">
                  <div className="chip-container">
                    {chips.map((chip, index) => (
                      <GlassChip
                        key={index}
                        label={chip}
                        onRemove={() => removeChip(index)}
                        variant={index % 2 === 0 ? 'primary' : 'default'}
                      />
                    ))}
                  </div>
                  <GlassButton onClick={addChip} className="add-chip-btn">
                    <Plus size={16} />
                    Add Chip
                  </GlassButton>
                </div>
              </GlassSurface>

              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>Chip Variants</h3>
                <p>Different chip styles and sizes</p>
                <div className="chip-variants">
                  <GlassChip label="Default" />
                  <GlassChip label="Primary" variant="primary" />
                  <GlassChip label="Success" variant="success" />
                  <GlassChip label="Warning" variant="warning" />
                  <GlassChip label="Danger" variant="danger" />
                </div>
              </GlassSurface>
            </div>
          </div>
        );

      case 'toast':
        return (
          <div className="content-section">
            <h1>Glass Toast Messages</h1>
            <p>Toast notifications with glass effects</p>
            
            <div className="component-grid">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>Toast Demo</h3>
                <p>Click buttons to show different toast types</p>
                <div className="toast-showcase">
                  <GlassButton onClick={() => addToast('success', 'Operation completed successfully!')}>
                    Success Toast
                  </GlassButton>
                  <GlassButton onClick={() => addToast('error', 'Something went wrong!')}>
                    Error Toast
                  </GlassButton>
                  <GlassButton onClick={() => addToast('warning', 'Please check your input!')}>
                    Warning Toast
                  </GlassButton>
                  <GlassButton onClick={() => addToast('info', 'Here is some information!')}>
                    Info Toast
                  </GlassButton>
                </div>
              </GlassSurface>
            </div>

            {toasts.map(toast => (
              <GlassToast
                key={toast.id}
                message={toast.message}
                type={toast.type}
                onClose={() => removeToast(toast.id)}
                duration={4000}
              />
            ))}
          </div>
        );

      case 'tooltip':
        return (
          <div className="content-section">
            <h1>Glass Tooltips</h1>
            <p>Tooltip components with glass effects and positioning</p>
            
            <div className="component-grid">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>Tooltip Positions</h3>
                <p>Hover over buttons to see tooltips in different positions</p>
                <div className="tooltip-showcase">
                  <div className="tooltip-row">
                    <GlassTooltip content="This is a top tooltip" position="top">
                      <GlassButton>Top Tooltip</GlassButton>
                    </GlassTooltip>
                    <GlassTooltip content="This is a bottom tooltip" position="bottom">
                      <GlassButton>Bottom Tooltip</GlassButton>
                    </GlassTooltip>
                  </div>
                  <div className="tooltip-row">
                    <GlassTooltip content="This is a left tooltip" position="left">
                      <GlassButton>Left Tooltip</GlassButton>
                    </GlassTooltip>
                    <GlassTooltip content="This is a right tooltip" position="right">
                      <GlassButton>Right Tooltip</GlassButton>
                    </GlassTooltip>
                  </div>
                </div>
              </GlassSurface>

              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>Tooltip with Different Elements</h3>
                <p>Tooltips work with various elements</p>
                <div className="tooltip-showcase">
                  <GlassTooltip content="This is a tooltip on a button">
                    <GlassButton>Button with Tooltip</GlassButton>
                  </GlassTooltip>
                  <GlassTooltip content="This is a tooltip on an icon">
                    <div className="tooltip-icon">
                      <Settings size={24} />
                    </div>
                  </GlassTooltip>
                  <GlassTooltip content="This is a tooltip on text">
                    <span className="tooltip-text">Hover me for tooltip</span>
                  </GlassTooltip>
                </div>
              </GlassSurface>
            </div>
          </div>
        );

      case 'preview':
        return (
          <div className="content-section">
            <h1>Live Glass Preview</h1>
            <p>Adjust glass properties and see real-time changes</p>
            
            <div className="preview-section">
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={glassProps.borderRadius}
                displace={glassProps.displace}
                blur={glassProps.blur}
                brightness={glassProps.brightness}
                opacity={glassProps.opacity}
                saturation={glassProps.saturation}
                className="preview-container"
              >
                <div className="preview-header">
                  <Sliders size={24} />
                  <h2>Glass Properties Control</h2>
                  <p>Adjust the glass surface properties in real-time</p>
                </div>
                
                <div className="controls-grid">
                  <div className="control-group">
                    <label>
                      <Zap size={16} />
                      Blur: {glassProps.blur}px
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={glassProps.blur}
                      onChange={(e) => updateGlassProp('blur', parseInt(e.target.value))}
                      className="control-slider"
                    />
                  </div>

                  <div className="control-group">
                    <label>
                      <Eye size={16} />
                      Brightness: {glassProps.brightness}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={glassProps.brightness}
                      onChange={(e) => updateGlassProp('brightness', parseInt(e.target.value))}
                      className="control-slider"
                    />
                  </div>

                  <div className="control-group">
                    <label>
                      <EyeOff size={16} />
                      Opacity: {glassProps.opacity}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={glassProps.opacity}
                      onChange={(e) => updateGlassProp('opacity', parseFloat(e.target.value))}
                      className="control-slider"
                    />
                  </div>

                  <div className="control-group">
                    <label>
                      <Palette size={16} />
                      Displace: {glassProps.displace}px
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={glassProps.displace}
                      onChange={(e) => updateGlassProp('displace', parseInt(e.target.value))}
                      className="control-slider"
                    />
                  </div>

                  <div className="control-group">
                    <label>
                      <Settings size={16} />
                      Border Radius: {glassProps.borderRadius}px
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={glassProps.borderRadius}
                      onChange={(e) => updateGlassProp('borderRadius', parseInt(e.target.value))}
                      className="control-slider"
                    />
                  </div>

                  <div className="control-group">
                    <label>
                      <Palette size={16} />
                      Saturation: {glassProps.saturation}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      step="0.1"
                      value={glassProps.saturation}
                      onChange={(e) => updateGlassProp('saturation', parseFloat(e.target.value))}
                      className="control-slider"
                    />
                  </div>
                </div>

                <div className="preview-demo">
                  <h3>Live Preview</h3>
                  <p>This surface updates in real-time as you adjust the properties above</p>
                  <div className="preview-content">
                    <div className="preview-item">
                      <User size={32} />
                      <span>User Profile</span>
                    </div>
                    <div className="preview-item">
                      <Settings size={32} />
                      <span>Settings</span>
                    </div>
                    <div className="preview-item">
                      <Music size={32} />
                      <span>Music Player</span>
                    </div>
                  </div>
                </div>
              </GlassSurface>
            </div>
          </div>
        );

      case 'documentation':
        return (
          <div className="content-section">
            <h1>Documentation</h1>
            <p>Complete API reference and usage examples for all components</p>

            <div className="documentation-grid">
              {/* GlassSurface Documentation */}
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>GlassSurface</h3>
                <p>Base glass morphism container component</p>
                
                <div className="props-section">
                  <h4>Props</h4>
                  <div className="props-list">
                    <div className="prop-item">
                      <code>blur</code>
                      <span>number (default: 20)</span>
                      <p>Backdrop blur intensity in pixels</p>
                    </div>
                    <div className="prop-item">
                      <code>opacity</code>
                      <span>number (default: 0.9)</span>
                      <p>Background opacity (0-1)</p>
                    </div>
                    <div className="prop-item">
                      <code>borderRadius</code>
                      <span>number (default: 24)</span>
                      <p>Border radius in pixels</p>
                    </div>
                    <div className="prop-item">
                      <code>displace</code>
                      <span>number (default: 8)</span>
                      <p>Displacement effect intensity</p>
                    </div>
                    <div className="prop-item">
                      <code>brightness</code>
                      <span>number (default: 60)</span>
                      <p>Backdrop brightness percentage</p>
                    </div>
                    <div className="prop-item">
                      <code>saturation</code>
                      <span>number (default: 1.8)</span>
                      <p>Backdrop saturation multiplier</p>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`<GlassSurface
  blur={20}
  opacity={0.9}
  borderRadius={24}
  displace={8}
  brightness={60}
  saturation={1.8}
>
  <h2>Your Content</h2>
  <p>Glass morphism container</p>
</GlassSurface>`}
                  language="tsx"
                  title="GlassSurface Example"
                />
              </GlassSurface>

              {/* GlassButton Documentation */}
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>GlassButton</h3>
                <p>Interactive button with glass effects and hover animations</p>
                
                <div className="props-section">
                  <h4>Props</h4>
                  <div className="props-list">
                    <div className="prop-item">
                      <code>glowColor</code>
                      <span>string (default: "white")</span>
                      <p>Color of the glowing border animation</p>
                    </div>
                    <div className="prop-item">
                      <code>glowEffects</code>
                      <span>boolean (default: true)</span>
                      <p>Enable/disable glowing border animation</p>
                    </div>
                    <div className="prop-item">
                      <code>onClick</code>
                      <span>function</span>
                      <p>Click event handler</p>
                    </div>
                    <div className="prop-item">
                      <code>disabled</code>
                      <span>boolean (default: false)</span>
                      <p>Disable button interactions</p>
                    </div>
                    <div className="prop-item">
                      <code>className</code>
                      <span>string</span>
                      <p>Additional CSS classes</p>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`<GlassButton
  glowColor="white"
  glowEffects={true}
  onClick={() => console.log('Clicked!')}
  disabled={false}
>
  Click Me
</GlassButton>`}
                  language="tsx"
                  title="GlassButton Example"
                />
              </GlassSurface>

              {/* GlassInput Documentation */}
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>GlassInput</h3>
                <p>Input field with glass styling and focus effects</p>
                
                <div className="props-section">
                  <h4>Props</h4>
                  <div className="props-list">
                    <div className="prop-item">
                      <code>type</code>
                      <span>string (default: "text")</span>
                      <p>Input type (text, email, password, etc.)</p>
                    </div>
                    <div className="prop-item">
                      <code>placeholder</code>
                      <span>string</span>
                      <p>Placeholder text</p>
                    </div>
                    <div className="prop-item">
                      <code>value</code>
                      <span>string</span>
                      <p>Input value</p>
                    </div>
                    <div className="prop-item">
                      <code>onChange</code>
                      <span>function</span>
                      <p>Change event handler</p>
                    </div>
                    <div className="prop-item">
                      <code>color</code>
                      <span>string (default: "white")</span>
                      <p>Text color</p>
                    </div>
                    <div className="prop-item">
                      <code>as</code>
                      <span>"input" | "textarea"</span>
                      <p>Render as input or textarea</p>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`<GlassInput
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  color="white"
/>`}
                  language="tsx"
                  title="GlassInput Example"
                />
              </GlassSurface>

              {/* GlassCard Documentation */}
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>GlassCard</h3>
                <p>Card container with glass effects for content organization</p>
                
                <div className="props-section">
                  <h4>Props</h4>
                  <div className="props-list">
                    <div className="prop-item">
                      <code>title</code>
                      <span>string</span>
                      <p>Card title (optional)</p>
                    </div>
                    <div className="prop-item">
                      <code>className</code>
                      <span>string</span>
                      <p>Additional CSS classes</p>
                    </div>
                    <div className="prop-item">
                      <code>style</code>
                      <span>object</span>
                      <p>Inline styles</p>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`<GlassCard
  title="User Profile"
  className="user-card"
  style={{ maxWidth: '400px' }}
>
  <h3>John Doe</h3>
  <p>Software Developer</p>
  <GlassButton>View Profile</GlassButton>
</GlassCard>`}
                  language="tsx"
                  title="GlassCard Example"
                />
              </GlassSurface>

              {/* GlassModal Documentation */}
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>GlassModal</h3>
                <p>Modal dialog with glass overlay and backdrop blur</p>
                
                <div className="props-section">
                  <h4>Props</h4>
                  <div className="props-list">
                    <div className="prop-item">
                      <code>isOpen</code>
                      <span>boolean</span>
                      <p>Control modal visibility</p>
                    </div>
                    <div className="prop-item">
                      <code>onClose</code>
                      <span>function</span>
                      <p>Close event handler</p>
                    </div>
                    <div className="prop-item">
                      <code>title</code>
                      <span>string</span>
                      <p>Modal title (optional)</p>
                    </div>
                    <div className="prop-item">
                      <code>closeOnBackdropClick</code>
                      <span>boolean (default: true)</span>
                      <p>Close when clicking backdrop</p>
                    </div>
                    <div className="prop-item">
                      <code>size</code>
                      <span>"small" | "medium" | "large"</span>
                      <p>Modal size variant</p>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`<GlassModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Settings"
  closeOnBackdropClick={true}
  size="medium"
>
  <p>Modal content goes here</p>
  <GlassButton onClick={() => setShowModal(false)}>
    Close
  </GlassButton>
</GlassModal>`}
                  language="tsx"
                  title="GlassModal Example"
                />
              </GlassSurface>

              {/* GlassSidebar Documentation */}
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>GlassSidebar</h3>
                <p>Sidebar that slides in from left or right with glass effects</p>
                
                <div className="props-section">
                  <h4>Props</h4>
                  <div className="props-list">
                    <div className="prop-item">
                      <code>isOpen</code>
                      <span>boolean</span>
                      <p>Control sidebar visibility</p>
                    </div>
                    <div className="prop-item">
                      <code>onClose</code>
                      <span>function</span>
                      <p>Close event handler</p>
                    </div>
                    <div className="prop-item">
                      <code>position</code>
                      <span>"left" | "right" (default: "right")</span>
                      <p>Sidebar position</p>
                    </div>
                    <div className="prop-item">
                      <code>width</code>
                      <span>string (default: "400px")</span>
                      <p>Sidebar width</p>
                    </div>
                    <div className="prop-item">
                      <code>closeOnBackdropClick</code>
                      <span>boolean (default: true)</span>
                      <p>Close when clicking backdrop</p>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`<GlassSidebar
  isOpen={showSidebar}
  onClose={() => setShowSidebar(false)}
  position="right"
  width="400px"
  closeOnBackdropClick={true}
>
  <h3>Navigation</h3>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</GlassSidebar>`}
                  language="tsx"
                  title="GlassSidebar Example"
                />
              </GlassSurface>

              {/* GlassTooltip Documentation */}
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={24}
                displace={8}
                blur={20}
                brightness={60}
                opacity={0.9}
                className="component-card"
              >
                <h3>GlassTooltip</h3>
                <p>Tooltip with glass effects and configurable positioning</p>
                
                <div className="props-section">
                  <h4>Props</h4>
                  <div className="props-list">
                    <div className="prop-item">
                      <code>content</code>
                      <span>string</span>
                      <p>Tooltip content text</p>
                    </div>
                    <div className="prop-item">
                      <code>position</code>
                      <span>"top" | "bottom" | "left" | "right"</span>
                      <p>Tooltip position relative to trigger</p>
                    </div>
                    <div className="prop-item">
                      <code>delay</code>
                      <span>number (default: 300)</span>
                      <p>Show delay in milliseconds</p>
                    </div>
                    <div className="prop-item">
                      <code>children</code>
                      <span>ReactNode</span>
                      <p>Element that triggers the tooltip</p>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  code={`<GlassTooltip
  content="This is a helpful tooltip"
  position="top"
  delay={300}
>
  <GlassButton>Hover me</GlassButton>
</GlassTooltip>`}
                  language="tsx"
                  title="GlassTooltip Example"
                />
              </GlassSurface>
            </div>
          </div>
        );

      default:
        return <div>Component not found</div>;
    }
  };

  return (
    <div className="components-showcase">
      {/* Background Image */}
      <div 
        className="background-image"
        style={{
          backgroundImage: `url('/src/assets/${backgrounds[currentBackground]}')`
        }}
      ></div>
      
      {/* Navigation */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="nav-title">
            <span>React Liquid Glass Kit</span>
          </div>
          <div className="header-icons">
            <div className="search-icon">
              <Search size={18} />
            </div>
            <div className="notifications-icon">
              <Bell size={18} />
            </div>
          <div
            className="background-switcher"
            onClick={switchBackground}
            title="Switch Background"
            data-bg={backgrounds[currentBackground]}
          >
            <Settings size={16} />
            <span>Change Background</span>
          </div>
          </div>
        </div>
      </div>

      <div className="main-layout">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <div className="sidebar-container">
            <div className="sidebar-header">
              <h2>Components</h2>
            </div>
            <nav className="sidebar-nav">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`sidebar-item ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <category.icon size={20} />
                  <span>{category.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p className="copyright">
            © 2025 by Divin Divakaran
          </p>
          <div className="footer-links">
            <a 
              href="https://www.npmjs.com/package/react-liquid-glass-kit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Package size={16} />
              NPM Package
            </a>
            <a 
              href="https://github.com/divindvm/react-liquid-glass-kit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Github size={16} />
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Components;