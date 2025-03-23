'use client'
import React, { JSX, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Send,
  Cloud,
  Folder,
  HardDrive,
  Link,
  FileText,
  Image,
  Video,
  FileSpreadsheet,
  ChevronRight,
  Database
} from 'lucide-react';

const Dashboard = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm FYND AI. What would you like me to help you find?",
      isUser: false
    }
  ]);
  interface SearchResults {
    documents: Array<{
      name: string;
      type: string;
      icon: JSX.Element;
      match: number;
      preview: string;
      actions: Array<{
        name: string;
        description: string;
      }>;
    }>;
    images: Array<{
      name: string;
      type: string;
      icon: JSX.Element;
      match: number;
      preview: string;
      actions: Array<{
        name: string;
        description: string;
      }>;
    }>;
    files: Array<{
      name: string;
      type: string;
      icon: JSX.Element;
      match: number;
      preview: string;
      actions: Array<{
        name: string;
        description: string;
      }>;
    }>;
  }
  
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null);
  const [chatHistory, setChatHistory] = useState([
    "Marketing performance data",
    "Q3 financial reports",
    "Project budget analysis"
  ]);
  const [connectionOptions, setConnectionOptions] = useState([
    { 
      name: 'Google Drive', 
      icon: <Cloud className="text-[#ff5c35] w-5 h-5" />,
      connected: true
    },
    { 
      name: 'Local Files', 
      icon: <HardDrive className="text-[#ff5c35] w-5 h-5" />,
      connected: true
    },
    { 
      name: 'Database', 
      icon: <Database className="text-[#ff5c35] w-5 h-5" />,
      connected: false
    }
  ]);

  const mockSearchResults = {
    documents: [
      {
        name: 'Q3_Marketing_Performance.pdf',
        type: 'PDF',
        icon: <FileText className="text-[#ff5c35] w-6 h-6" />,
        match: 98,
        preview: 'Detailed quarterly marketing performance analysis',
        actions: [
          { 
            name: 'Summarize', 
            description: 'Generate concise summary of key insights'
          },
          { 
            name: 'Extract Data', 
            description: 'Pull out key metrics and statistics'
          },
          { 
            name: 'Create Presentation', 
            description: 'Convert document into presentation slides'
          }
        ]
      }
    ],
    images: [
      {
        name: 'Marketing_Campaign_Metrics.jpg',
        type: 'Image',
        icon: <Image className="text-[#ff5c35] w-6 h-6" />,
        match: 92,
        preview: 'Graphical representation of marketing campaign performance',
        actions: [
          { 
            name: 'Analyze Image', 
            description: 'Detailed visual content analysis'
          },
          { 
            name: 'Extract Text', 
            description: 'OCR and text extraction from image'
          },
          { 
            name: 'Generate Report', 
            description: 'Create insights report based on image'
          }
        ]
      }
    ],
    files: [
      {
        name: 'Sales_Forecast_2023.xlsx',
        type: 'Spreadsheet',
        icon: <FileSpreadsheet className="text-[#ff5c35] w-6 h-6" />,
        match: 85,
        preview: 'Annual sales forecast and financial projections',
        actions: [
          { 
            name: 'Analyze Trends', 
            description: 'Identify key sales trends and patterns'
          },
          { 
            name: 'Generate Insights', 
            description: 'Create comprehensive financial insights'
          },
          { 
            name: 'Export Summary', 
            description: 'Export key findings to new document'
          }
        ]
      }
    ]
  };

  const handleSendMessage = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    const newMessages = [
      ...messages, 
      { text: input, isUser: true }
    ];
    setMessages(newMessages);

    // Update chat history
    setChatHistory([input, ...chatHistory].slice(0, 5));

    // Simulate search results
    setTimeout(() => {
      const aiResponse = {
        text: `I found relevant results for your query "${input}":`,
        isUser: false
      };

      // Simulate retrieval of different file types
      setMessages([...newMessages, aiResponse]);
      setSearchResults(mockSearchResults);
    }, 1000);

    // Clear input
    setInput('');
  };

  const renderSearchResults = () => {
    if (!searchResults) return null;

    return (
      <div className="space-y-6">
        {/* Documents Section */}
        {searchResults.documents.length > 0 && (
          <div>
            <h3 className="text-lg font-light mb-4 flex items-center">
              <FileText className="mr-2 text-[#ff5c35]" />
              Documents
            </h3>
            {searchResults.documents.map((doc) => (
              <motion.div
                key={doc.name}
                whileHover={{ scale: 1.02 }}
                className="
                  bg-zinc-800/60 rounded-3xl p-6 mb-4
                  hover:bg-zinc-800/80 transition-colors
                "
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {doc.icon}
                    <div className="ml-4">
                      <h4 className="text-xl font-light">{doc.name}</h4>
                      <p className="text-sm opacity-70">{doc.preview}</p>
                    </div>
                  </div>
                  <div className="text-[#ff5c35] font-bold text-2xl">
                    {doc.match}%
                    <span className="block text-xs opacity-70 font-normal">Match</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {doc.actions.map((action) => (
                    <motion.button
                      key={action.name}
                      whileHover={{ scale: 1.05 }}
                      className="
                        bg-zinc-700 rounded-xl p-4
                        hover:bg-[#ff5c35]/20 transition-colors
                        text-left
                      "
                    >
                      <h5 className="font-light text-sm">{action.name}</h5>
                      <p className="text-xs opacity-70 mt-1">{action.description}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Images and Files Sections - Similar to Documents Section */}
        {searchResults.images.length > 0 && (
          <div>
            <h3 className="text-lg font-light mb-4 flex items-center">
              <Image className="mr-2 text-[#ff5c35]" />
              Images
            </h3>
            {searchResults.images.map((img) => (
              <motion.div
                key={img.name}
                whileHover={{ scale: 1.02 }}
                className="
                  bg-zinc-800/60 rounded-3xl p-6 mb-4
                  hover:bg-zinc-800/80 transition-colors
                "
              >
                {/* Similar structure to document rendering */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {img.icon}
                    <div className="ml-4">
                      <h4 className="text-xl font-light">{img.name}</h4>
                      <p className="text-sm opacity-70">{img.preview}</p>
                    </div>
                  </div>
                  <div className="text-[#ff5c35] font-bold text-2xl">
                    {img.match}%
                    <span className="block text-xs opacity-70 font-normal">Match</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {img.actions.map((action) => (
                    <motion.button
                      key={action.name}
                      whileHover={{ scale: 1.05 }}
                      className="
                        bg-zinc-700 rounded-xl p-4
                        hover:bg-[#ff5c35]/20 transition-colors
                        text-left
                      "
                    >
                      <h5 className="font-light text-sm">{action.name}</h5>
                      <p className="text-xs opacity-70 mt-1">{action.description}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {searchResults.files.length > 0 && (
          <div>
            <h3 className="text-lg font-light mb-4 flex items-center">
              <FileSpreadsheet className="mr-2 text-[#ff5c35]" />
              Spreadsheets
            </h3>
            {searchResults.files.map((file) => (
              <motion.div
                key={file.name}
                whileHover={{ scale: 1.02 }}
                className="
                  bg-zinc-800/60 rounded-3xl p-6 mb-4
                  hover:bg-zinc-800/80 transition-colors
                "
              >
                {/* Similar structure to document rendering */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {file.icon}
                    <div className="ml-4">
                      <h4 className="text-xl font-light">{file.name}</h4>
                      <p className="text-sm opacity-70">{file.preview}</p>
                    </div>
                  </div>
                  <div className="text-[#ff5c35] font-bold text-2xl">
                    {file.match}%
                    <span className="block text-xs opacity-70 font-normal">Match</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {file.actions.map((action) => (
                    <motion.button
                      key={action.name}
                      whileHover={{ scale: 1.05 }}
                      className="
                        bg-zinc-700 rounded-xl p-4
                        hover:bg-[#ff5c35]/20 transition-colors
                        text-left
                      "
                    >
                      <h5 className="font-light text-sm">{action.name}</h5>
                      <p className="text-xs opacity-70 mt-1">{action.description}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col">
        {/* FYND AI Logo */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-[#ff5c35]/20 rounded-full flex items-center justify-center mr-2">
            <span className="text-[#ff5c35] font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-light">FYND AI</span>
        </div>

        {/* Connection Options */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-wider text-zinc-400 mb-4">
            Connections
          </h3>
          <div className="space-y-3">
            {connectionOptions.map((source) => (
              <div
                key={source.name}
                className={`
                  flex items-center p-2 rounded-lg
                  ${source.connected 
                    ? 'opacity-100 hover:bg-zinc-800' 
                    : 'opacity-50 cursor-not-allowed'}
                `}
              >
                {source.icon}
                <span className="ml-3 flex-grow">{source.name}</span>
                {source.connected && (
                  <div className="w-2 h-2 bg-[#ff5c35] rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat History */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-zinc-400 mb-4">
            Chat History
          </h3>
          <div className="space-y-2">
            {chatHistory.map((chat, index) => (
              <div 
                key={index}
                className="
                  bg-zinc-800/50 rounded-full 
                  px-4 py-2 text-sm 
                  flex items-center justify-between
                  hover:bg-[#ff5c35]/10 cursor-pointer
                "
              >
                <span className="truncate">{chat}</span>
                <ChevronRight className="w-4 h-4 text-[#ff5c35] opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-light">Chat with FYND AI</h2>
            <p className="text-xs text-zinc-400">
              A conversational tool for searches, analysis, and insights
            </p>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-grow overflow-y-auto p-8">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`
                flex items-start gap-3 mb-6
                ${message.isUser ? 'flex-row-reverse' : ''}
              `}
            >
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${message.isUser 
                    ? 'bg-[#ff5c35]/20 text-[#ff5c35]' 
                    : 'bg-zinc-800 text-white'}
                `}
              >
                {message.isUser ? 'U' : <Sparkles className="w-5 h-5" />}
              </div>

              <div 
                className={`
                  relative max-w-3xl 
                  ${message.isUser 
                    ? 'bg-[#ff5c35]/10 text-right' 
                    : 'bg-zinc-800'}
                  rounded-3xl p-4 
                `}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}

          {/* Search Results */}
          {searchResults && (
            <div className="mt-6">
              {renderSearchResults()}
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-zinc-800">
          <form 
            onSubmit={handleSendMessage}
            className="flex items-center"
          >
            <div className="flex items-center mr-4">
              <button 
                type="button"
                className="
                  bg-zinc-800 rounded-full 
                  p-2 mr-2 
                  hover:bg-[#ff5c35]/20
                "
              >
                <Link className="w-5 h-5 text-[#ff5c35]" />
              </button>
              <button 
                type="button"
                className="
                  bg-zinc-800 rounded-full 
                  p-2 
                  hover:bg-[#ff5c35]/20
                "
              >
                <Sparkles className="w-5 h-5 text-[#ff5c35]" />
              </button>
            </div>

            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a message here..."
              className="
                flex-grow bg-zinc-800 
                rounded-full px-4 py-2
                mr-4 text-white
                placeholder-zinc-500
              "
            />

            <button 
              type="submit"
              className="
                bg-[#ff5c35] text-white 
                rounded-full p-2
                hover:bg-[#ff5c35]/90
              "
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;