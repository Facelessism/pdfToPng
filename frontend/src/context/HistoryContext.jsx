import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (entry) => {
    setHistory((prev) => [
      {
        id: Date.now(),
        fileName: entry.fileName,
        conversionType: entry.conversionType,
        timestamp: new Date().toLocaleString(),
        downloadUrl: entry.downloadUrl,
        downloadName: entry.downloadName,
      },
      ...prev,
    ]);
  };

  const clearHistory = () => setHistory([]);

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);