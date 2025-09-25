import React from 'react';
import { Sliders, Zap, Eye, EyeOff, Palette, Settings } from 'lucide-react';

interface GlassProperties {
  blur: number;
  brightness: number;
  opacity: number;
  displace: number;
  borderRadius: number;
  saturation: number;
}

interface GlassPropertiesControlProps {
  properties: GlassProperties;
  onPropertyChange: (property: keyof GlassProperties, value: number) => void;
  className?: string;
}

const GlassPropertiesControl: React.FC<GlassPropertiesControlProps> = ({
  properties,
  onPropertyChange,
  className = ''
}) => {
  return (
    <div className={`glass-properties-control ${className}`}>
      <div className="control-header">
        <Sliders size={20} />
        <h3>Glass Properties</h3>
        <p>Adjust properties to see real-time changes</p>
      </div>
      
      <div className="controls-grid">
        <div className="control-group">
          <label>
            <Zap size={14} />
            Blur: {properties.blur}px
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={properties.blur}
            onChange={(e) => onPropertyChange('blur', parseInt(e.target.value))}
            className="control-slider"
          />
        </div>

        <div className="control-group">
          <label>
            <Eye size={14} />
            Brightness: {properties.brightness}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={properties.brightness}
            onChange={(e) => onPropertyChange('brightness', parseInt(e.target.value))}
            className="control-slider"
          />
        </div>

        <div className="control-group">
          <label>
            <EyeOff size={14} />
            Opacity: {properties.opacity}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={properties.opacity}
            onChange={(e) => onPropertyChange('opacity', parseFloat(e.target.value))}
            className="control-slider"
          />
        </div>

        <div className="control-group">
          <label>
            <Palette size={14} />
            Displace: {properties.displace}px
          </label>
          <input
            type="range"
            min="0"
            max="30"
            value={properties.displace}
            onChange={(e) => onPropertyChange('displace', parseInt(e.target.value))}
            className="control-slider"
          />
        </div>

        <div className="control-group">
          <label>
            <Settings size={14} />
            Border Radius: {properties.borderRadius}px
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={properties.borderRadius}
            onChange={(e) => onPropertyChange('borderRadius', parseInt(e.target.value))}
            className="control-slider"
          />
        </div>

        <div className="control-group">
          <label>
            <Palette size={14} />
            Saturation: {properties.saturation}
          </label>
          <input
            type="range"
            min="0"
            max="3"
            step="0.1"
            value={properties.saturation}
            onChange={(e) => onPropertyChange('saturation', parseFloat(e.target.value))}
            className="control-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default GlassPropertiesControl;
