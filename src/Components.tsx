import React, { useState } from 'react';
import {
  GlassMorphism,
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
  Trash2,
  Sliders,
  Palette,
  Zap,
  Eye,
  EyeOff,
  Menu,
  X,
  CheckSquare,
  Square,
  Circle,
  Tag,
  MessageSquare,
  FileText,
  ToggleLeft,
  ToggleRight,
  HelpCircle
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
  | 'preview';

function Components() {
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>('overview');
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
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
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [inputProps, setInputProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [cardProps, setCardProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [modalProps, setModalProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [sidebarProps, setSidebarProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [formProps, setFormProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [radioProps, setRadioProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [checkboxProps, setCheckboxProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [chipProps, setChipProps] = useState({
    blur: 20,
    brightness: 60,
    opacity: 0.9,
    displace: 8,
    borderRadius: 24,
    saturation: 1.8
  });

  const [toastProps, setToastProps] = useState({
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
    { id: 'preview' as ComponentCategory, label: 'Live Preview', icon: Eye }
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
                <GlassSurface
                  key={category.id}
                  width="100%"
                  height="auto"
                  borderRadius={20}
                  displace={8}
                  blur={20}
                  brightness={60}
                  opacity={0.9}
                  className="overview-card"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <category.icon size={32} />
                  <h3>{category.label}</h3>
                  <p>Interactive {category.label.toLowerCase()} with glass effects</p>
                </GlassSurface>
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
                displace={buttonProps.displace}
                blur={buttonProps.blur}
                brightness={buttonProps.brightness}
                opacity={buttonProps.opacity}
                saturation={buttonProps.saturation}
                className="component-card"
              >
                <h3>Primary Buttons</h3>
                <p>Main action buttons with glass effects</p>
                <div className="button-showcase">
                <GlassButton
                  glowColor="white"
                  glowEffects={true}
                  blur={buttonProps.blur}
                  opacity={buttonProps.opacity}
                  borderRadius={buttonProps.borderRadius}
                  saturation={buttonProps.saturation}
                  brightness={buttonProps.brightness}
                  displace={buttonProps.displace}
                  style={{
                    background: `rgba(255, 255, 255, 0.1)`,
                    border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                  }}
                >
                  Primary Button
                </GlassButton>
                  <GlassButton 
                    className="secondary"
                    glowColor="gray"
                    glowEffects={true}
                    blur={buttonProps.blur}
                    opacity={buttonProps.opacity}
                    borderRadius={buttonProps.borderRadius}
                    saturation={buttonProps.saturation}
                    brightness={buttonProps.brightness}
                    displace={buttonProps.displace}
                    style={{
                      background: `rgba(108, 117, 125, 0.1)`,
                      border: `0.5px solid rgba(108, 117, 125, 0.4)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                    }}
                  >
                    Secondary
                  </GlassButton>
                  <GlassButton 
                    className="success"
                    glowColor="green"
                    glowEffects={true}
                    blur={buttonProps.blur}
                    opacity={buttonProps.opacity}
                    borderRadius={buttonProps.borderRadius}
                    saturation={buttonProps.saturation}
                    brightness={buttonProps.brightness}
                    displace={buttonProps.displace}
                    style={{
                      background: `rgba(40, 167, 69, 0.1)`,
                      border: `0.5px solid rgba(40, 167, 69, 0.4)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                    }}
                  >
                    Success
                  </GlassButton>
                  <GlassButton 
                    className="danger"
                    glowColor="red"
                    glowEffects={true}
                    blur={buttonProps.blur}
                    opacity={buttonProps.opacity}
                    borderRadius={buttonProps.borderRadius}
                    saturation={buttonProps.saturation}
                    brightness={buttonProps.brightness}
                    displace={buttonProps.displace}
                    style={{
                      background: `rgba(220, 53, 69, 0.1)`,
                      border: `0.5px solid rgba(220, 53, 69, 0.4)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
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
                displace={buttonProps.displace}
                blur={buttonProps.blur}
                brightness={buttonProps.brightness}
                opacity={buttonProps.opacity}
                saturation={buttonProps.saturation}
                className="component-card"
              >
                <h3>Icon Buttons</h3>
                <p>Buttons with icons for better UX</p>
                <div className="icon-button-showcase">
                  <GlassButton 
                    className="icon-btn"
                    glowColor="white"
                    glowEffects={true}
                    blur={buttonProps.blur}
                    opacity={buttonProps.opacity}
                    borderRadius={buttonProps.borderRadius}
                    saturation={buttonProps.saturation}
                    brightness={buttonProps.brightness}
                    displace={buttonProps.displace}
                    style={{
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                    }}
                  >
                    <Play size={20} />
                  </GlassButton>
                  <GlassButton 
                    className="icon-btn"
                    glowColor="white"
                    glowEffects={true}
                    blur={buttonProps.blur}
                    opacity={buttonProps.opacity}
                    borderRadius={buttonProps.borderRadius}
                    saturation={buttonProps.saturation}
                    brightness={buttonProps.brightness}
                    displace={buttonProps.displace}
                    style={{
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                    }}
                  >
                    <Pause size={20} />
                  </GlassButton>
                  <GlassButton 
                    className="icon-btn"
                    glowColor="white"
                    glowEffects={true}
                    blur={buttonProps.blur}
                    opacity={buttonProps.opacity}
                    borderRadius={buttonProps.borderRadius}
                    saturation={buttonProps.saturation}
                    brightness={buttonProps.brightness}
                    displace={buttonProps.displace}
                    style={{
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                    }}
                  >
                    <Settings size={20} />
                  </GlassButton>
                  <GlassButton 
                    className="icon-btn"
                    glowColor="white"
                    glowEffects={true}
                    blur={buttonProps.blur}
                    opacity={buttonProps.opacity}
                    borderRadius={buttonProps.borderRadius}
                    saturation={buttonProps.saturation}
                    brightness={buttonProps.brightness}
                    displace={buttonProps.displace}
                    style={{
                      backdropFilter: `blur(${buttonProps.blur}px) saturate(${buttonProps.saturation}) brightness(${buttonProps.brightness}%) contrast(1.2)`,
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
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
    backdropFilter: \`blur(\${${buttonProps.blur}}px) saturate(\${${buttonProps.saturation}}) brightness(\${${buttonProps.brightness}}%) contrast(1.2)\`,
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
                displace={inputProps.displace}
                blur={inputProps.blur}
                brightness={inputProps.brightness}
                opacity={inputProps.opacity}
                saturation={inputProps.saturation}
                className="component-card"
              >
                <h3>Text Inputs</h3>
                <p>Input fields with glass styling</p>
                <div className="input-showcase">
                  <GlassInput 
                    placeholder="Enter your name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <GlassInput 
                    type="email"
                    placeholder="Enter your email"
                  />
                  <GlassInput 
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
              </GlassSurface>

              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={inputProps.borderRadius}
                displace={inputProps.displace}
                blur={inputProps.blur}
                brightness={inputProps.brightness}
                opacity={inputProps.opacity}
                saturation={inputProps.saturation}
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
    backdropFilter: \`blur(\${${inputProps.blur}}px) saturate(\${${inputProps.saturation}}) brightness(\${${inputProps.brightness}}%) contrast(1.2)\`,
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
                  backdropFilter: `blur(${cardProps.blur}px) saturate(${cardProps.saturation}) brightness(${cardProps.brightness}%) contrast(1.2)`,
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
                  backdropFilter: `blur(${cardProps.blur}px) saturate(${cardProps.saturation}) brightness(${cardProps.brightness}%) contrast(1.2)`,
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
    backdropFilter: \`blur(\${${cardProps.blur}}px) saturate(\${${cardProps.saturation}}) brightness(\${${cardProps.brightness}}%) contrast(1.2)\`,
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
              properties={modalProps}
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
                className="component-card"
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
              style={{
                borderRadius: `${modalProps.borderRadius}px`,
                backdropFilter: `blur(${modalProps.blur}px) saturate(${modalProps.saturation}) brightness(${modalProps.brightness}%) contrast(1.2)`,
                background: `rgba(255, 255, 255, ${modalProps.opacity})`,
                border: `0.5px solid rgba(255, 255, 255, 0.18)`,
                boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)`
              }}
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
                className="component-card"
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
              <Settings size={18} />
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
    </div>
  );
}

export default Components;