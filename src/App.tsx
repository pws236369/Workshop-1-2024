import React from 'react';
import './App.css';
import { SearchBar } from './components/search-bar/SearchBar';
import { Title } from './components/title/Title';

interface AppContext {
  errorMessage: string | undefined;
  query: number;
  setQuery: (value: number) => void;
  onRetry: () => Promise<void>;
}

export const AppContext = React.createContext<AppContext | null>(null)

export const App: React.FC = () => {
  return (
    // TODO: implement AppContext.Provider
    // <AppContext.Provider value={}>
      <div className="app-container">
        <div className="title-container">
          <Title />
        </div>
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div className="comments-container">
          {/* TODO: show error / loader / comments */}
        </div>
      </div>
  // </AppContext.Provider>
  );
};
