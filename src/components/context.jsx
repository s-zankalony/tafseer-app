import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useState,
} from 'react';
import linksData from '../assets/links';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [currentLinksData, setCurrentLinksData] = useState(linksData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <AppContext.Provider
      value={{
        links,
        setLinks,
        currentLinksData,
        setCurrentLinksData,
        isSidebarOpen,
        setIsSidebarOpen,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
