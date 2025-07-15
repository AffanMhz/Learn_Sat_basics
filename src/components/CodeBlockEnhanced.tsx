import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  title?: string;
  language?: string;
}

const CodeBlock = ({ code, title, language = 'python' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Simple syntax highlighting for Python
  const highlightPython = (code: string) => {
    return code
      .replace(/(import|from|def|class|if|else|elif|for|while|try|except|return|with|as)\b/g, '<span class="text-purple-400">$1</span>')
      .replace(/(True|False|None|self)\b/g, '<span class="text-orange-400">$1</span>')
      .replace(/(\d+\.?\d*)/g, '<span class="text-yellow-400">$1</span>')
      .replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>')
      .replace(/(".*?"|'.*?')/g, '<span class="text-green-400">$1</span>')
      .replace(/(\w+)(\s*\()/g, '<span class="text-blue-400">$1</span>$2');
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-200">{title}</h4>
          <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{language}</span>
        </div>
      )}
      
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors z-10"
          title="Copy code"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
        
        <pre className="p-6 text-gray-300 text-sm overflow-x-auto leading-relaxed">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: language === 'python' ? highlightPython(code) : code 
            }}
          />
        </pre>
      </div>
      
      {copied && (
        <div className="absolute top-12 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
          Copied!
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
