import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language = 'tsx',
  title = 'Code Example',
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`code-snippet ${className}`}>
      <div className="code-header">
        <div className="code-title">
          <Code size={16} />
          <span>{title}</span>
          <span className="language-badge">{language}</span>
        </div>
        <button 
          className={`copy-button ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      
      <div className="code-content">
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
