import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useMemo,
  useCallback,
} from 'react';
import debounce from 'lodash/debounce';
import linksData from '../assets/links';
import { reducer } from './reducer';

const initialState = {
  links: linksData,
  currentLinksData: linksData,
  isSidebarOpen: false,
  searchTerm: '',
  currentPage: 1,
};

export const AppContext = createContext();

const PAGE_SIZE = 9;

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const normalizeString = useCallback((str) => {
    return str
      .toLowerCase()
      .replace(/[\u0610-\u061A\u064B-\u065F\u0670]/g, '')
      .replace(/[أإآا]/g, 'ا')
      .replace(/[ىي]/g, 'ي')
      .replace(/ة/g, 'ه');
  }, []);

  const filteredLinks = useMemo(() => {
    let trimmedSearchTerm = normalizeString(state.searchTerm.trim());
    trimmedSearchTerm = trimmedSearchTerm.replace(/^(سورة|سوره)\s*/, '');

    if (!trimmedSearchTerm) return state.links;

    const singleLetterSurahs = ['ق', 'ص'];

    return state.links
      .filter((link) => {
        const normalizedSura = normalizeString(link.sura);

        if (trimmedSearchTerm.length === 1) {
          return (
            (singleLetterSurahs.includes(link.sura) &&
              normalizedSura === trimmedSearchTerm) ||
            normalizedSura.startsWith(trimmedSearchTerm)
          );
        } else {
          return normalizedSura.includes(trimmedSearchTerm);
        }
      })
      .sort((a, b) => {
        const aNormalizedSura = normalizeString(a.sura);
        const bNormalizedSura = normalizeString(b.sura);

        // Handle ق and ص specially
        if (
          singleLetterSurahs.includes(a.sura) &&
          singleLetterSurahs.includes(b.sura)
        ) {
          return state.links.indexOf(a) - state.links.indexOf(b);
        }

        if (
          aNormalizedSura === trimmedSearchTerm &&
          bNormalizedSura === trimmedSearchTerm
        ) {
          return state.links.indexOf(a) - state.links.indexOf(b);
        }
        if (aNormalizedSura === trimmedSearchTerm) return -1;
        if (bNormalizedSura === trimmedSearchTerm) return 1;
        if (
          aNormalizedSura.startsWith(trimmedSearchTerm) &&
          bNormalizedSura.startsWith(trimmedSearchTerm)
        ) {
          return state.links.indexOf(a) - state.links.indexOf(b);
        }
        if (aNormalizedSura.startsWith(trimmedSearchTerm)) return -1;
        if (bNormalizedSura.startsWith(trimmedSearchTerm)) return 1;
        return state.links.indexOf(a) - state.links.indexOf(b);
      });
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        filteredLinks,
        setLinks: (payload) => dispatch({ type: 'SET_LINKS', payload }),
        setCurrentLinksData: (payload) =>
          dispatch({ type: 'SET_CURRENT_LINKS_DATA', payload }),
        setSearchTerm: debouncedSetSearchTerm,
        setCurrentPage: (payload) =>
          dispatch({ type: 'SET_CURRENT_PAGE', payload }),
        toggleSidebar: () => dispatch({ type: 'TOGGLE_SIDEBAR' }),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
