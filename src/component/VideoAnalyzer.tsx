import React, { useState, useRef } from 'react';
import { Upload, Video, Wand2, Link } from 'lucide-react';
import { cn } from '../lib/utils';

interface VideoAnalyzerProps {
  onSuccess?: () => void;
}

export function VideoAnalyzer({ onSuccess }: VideoAnalyzerProps) {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputType, setInputType] = useState<'url' | 'file'>('url');

  const handleAnalyze = async () => {
    setAnalyzing(true);
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAnalyzing(false);
    onSuccess?.();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'video/mp4') {
      setFile(selectedFile);
    } else {
      alert('Please select a valid MP4 file');
    }
  };

  const clearInput = () => {
    setUrl('');
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => {
            setInputType('url');
            clearInput();
          }}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            inputType === 'url'
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          <div className="flex items-center gap-2">
            <Link className="w-4 h-4" />
            YouTube URL
          </div>
        </button>
        <button
          onClick={() => {
            setInputType('file');
            clearInput();
          }}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            inputType === 'file'
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Upload MP4
          </div>
        </button>
      </div>

      {inputType === 'url' ? (
        <div className="relative">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter YouTube video URL"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {url && (
            <button
              onClick={() => setUrl('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Upload className="w-5 h-5" />
            </button>
          )}
        </div>
      ) : (
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept="video/mp4"
            onChange={handleFileChange}
            className="hidden"
          />
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "w-full px-4 py-8 rounded-lg border-2 border-dashed",
              "flex flex-col items-center justify-center cursor-pointer",
              "transition-colors",
              file ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
            )}
          >
            <Video className={cn("w-8 h-8 mb-2", file ? "text-blue-500" : "text-gray-400")} />
            {file ? (
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">Drop your MP4 file here</p>
                <p className="text-xs text-gray-500 mt-1">or click to browse</p>
              </div>
            )}
          </div>
          {file && (
            <button
              onClick={clearInput}
              className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-sm text-gray-400 hover:text-gray-600"
            >
              <Upload className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      <button
        onClick={handleAnalyze}
        disabled={(!url && !file) || analyzing}
        className={cn(
          "w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2",
          analyzing ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600",
          "text-white transition-colors",
          (!url && !file) && "opacity-50 cursor-not-allowed"
        )}
      >
        {analyzing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            Analyzing Video
          </>
        ) : (
          <>
            <Wand2 className="w-5 h-5" />
            Generate Content
          </>
        )}
      </button>
    </div>
  );
}