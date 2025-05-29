import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useMemo,
  useCallback,
  useState,
} from 'react';
import debounce from 'lodash/debounce';
import linksData from '../assets/links';
import hadithData from '../assets/hadith';
import { reducer } from './reducer.jsx';
import playlistsData from '../assets/playlists';
import hadithPlaylists from '../assets/hadithPlaylists';

const initialState = {
  links: linksData,
  currentLinksData: linksData,
  isSidebarOpen: false,
  searchTerm: '',
  currentPage: 1,
  selectedSura: '',
  currentPlaylists: [],
  hadith: hadithData,
  activeTab: 'tafseer', // Add this to track active tab
  hadithActiveTab: 'hadith', // Add this to track active tab in hadith page
};

export const AppContext = createContext();

const PAGE_SIZE = 9;

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedSura, setSelectedSura] = useState('');
  const [selectedJuz, setSelectedJuz] = useState(null);
  const [visibleSuras, setVisibleSuras] = useState([]);
  const [hadithActiveTab, setHadithActiveTab] = useState('hadith');
  const [playlists, setPlaylists] = useState(playlistsData);

  const normalizeString = useCallback((str) => {
    return str
      .toLowerCase()
      .replace(/[\u0610-\u061A\u064B-\u065F\u0670]/g, '')
      .replace(/[أإآا]/g, 'ا')
      .replace(/[ىي]/g, 'ي')
      .replace(/ة/g, 'ه');
  }, []);

  const filteredLinks = useMemo(() => {
    let trimmedSearchTerm = state.searchTerm.trim();
    trimmedSearchTerm = trimmedSearchTerm.replace(/^(سورة|سوره)\s*/, '');

    if (!trimmedSearchTerm) return state.links;

    const normalizedSearchTerm = normalizeString(trimmedSearchTerm);
    const singleLetterSurahs = ['ق', 'ص'];

    const exactMatches = [];
    const partialMatches = [];

    state.links.forEach((link) => {
      const normalizedSura = normalizeString(link.sura);
      const originalSura = link.sura.replace(/^(سورة|سوره)\s*/, '');

      // Special case for سبأ
      if (
        originalSura === 'سـبأ' &&
        (trimmedSearchTerm === 'سبأ' ||
          trimmedSearchTerm === 'سبا' ||
          normalizedSearchTerm.startsWith('سب'))
      ) {
        exactMatches.push(link);
        return;
      }

      // Handle single-letter surahs
      if (singleLetterSurahs.includes(trimmedSearchTerm)) {
        if (originalSura === trimmedSearchTerm) {
          exactMatches.push(link);
        } else if (normalizedSura.includes(normalizedSearchTerm)) {
          partialMatches.push(link);
        }
        return;
      }

      // General case
      if (normalizedSura.startsWith(normalizedSearchTerm)) {
        exactMatches.push(link);
      } else if (normalizedSura.includes(normalizedSearchTerm)) {
        partialMatches.push(link);
      }
    });

    // Sort exact matches based on their original order in state.links
    exactMatches.sort(
      (a, b) => state.links.indexOf(a) - state.links.indexOf(b)
    );

    // Sort partial matches based on their original order in state.links
    partialMatches.sort(
      (a, b) => state.links.indexOf(a) - state.links.indexOf(b)
    );

    // Combine exact and partial matches
    return [...exactMatches, ...partialMatches];
  }, [state.links, state.searchTerm, normalizeString]);

  const currentLinksData = useMemo(() => {
    const firstPageIndex = (state.currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return filteredLinks.slice(firstPageIndex, lastPageIndex);
  }, [filteredLinks, state.currentPage]);

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_LINKS_DATA', payload: currentLinksData });
  }, [currentLinksData]);

  const debouncedSetSearchTerm = useCallback(
    debounce(
      (term) => dispatch({ type: 'SET_SEARCH_TERM', payload: term }),
      300
    ),
    []
  );

  const updateSelectedSura = useCallback(
    (sura) => {
      setSelectedSura(sura);
      if (sura) {
        // Find the sura in links to get its ID
        const suraLink = state.links.find((link) => link.sura === sura);
        if (suraLink && parseInt(suraLink.id) >= 576) {
          // If sura ID >= 577, only show جزء عم playlist (id: 87)
          const juzAmmaPlaylist = playlists.find((p) => p.id === 87);
          dispatch({
            type: 'SET_CURRENT_PLAYLISTS',
            payload: juzAmmaPlaylist ? [juzAmmaPlaylist] : [],
          });
        } else {
          // Otherwise show regular sura playlist
          const suraPlaylists = playlists.filter((p) => p.sura === sura);
          dispatch({ type: 'SET_CURRENT_PLAYLISTS', payload: suraPlaylists });
        }
      } else {
        dispatch({ type: 'SET_CURRENT_PLAYLISTS', payload: [] });
      }
    },
    [state.links]
  );

  // Function to update visible suras from DisplayLinks
  const updateVisibleSuras = useCallback((suras) => {
    setVisibleSuras(suras);
  }, []);

  const value = {
    ...state,
    filteredLinks,
    setLinks: (payload) => dispatch({ type: 'SET_LINKS', payload }),
    setCurrentLinksData: (payload) =>
      dispatch({ type: 'SET_CURRENT_LINKS_DATA', payload }),
    setSearchTerm: debouncedSetSearchTerm,
    setCurrentPage: (payload) =>
      dispatch({ type: 'SET_CURRENT_PAGE', payload }),
    toggleSidebar: () => dispatch({ type: 'TOGGLE_SIDEBAR' }),
    normalizeString,
    resetSearchTerm: () => dispatch({ type: 'SET_SEARCH_TERM', payload: '' }),
    currentPlaylists: state.currentPlaylists,
    hadithPlaylists,
    selectedSura,
    updateSelectedSura,
    setActiveTab: (tab) => dispatch({ type: 'SET_ACTIVE_TAB', payload: tab }),
    selectedJuz,
    setSelectedJuz,
    visibleSuras,
    updateVisibleSuras,
    hadithActiveTab,
    setHadithActiveTab,
    playlists,
    setPlaylists,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
