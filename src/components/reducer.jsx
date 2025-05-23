export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LINKS':
      return { ...state, links: action.payload };

    case 'SET_CURRENT_LINKS_DATA':
      return { ...state, currentLinksData: action.payload };

    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload, currentPage: 1 };

    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };

    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen };

    case 'SET_CURRENT_PLAYLISTS':
      return {
        ...state,
        currentPlaylists: action.payload,
      };

    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };

    case 'SET_HADITH_ACTIVE_TAB':
      return { ...state, hadithActiveTab: action.payload };

    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};
