import React from 'react';
import './SearchBar.css';
import { AppContext } from '../../App';

export const SearchBar: React.FC = () => {
    const context = React.useContext(AppContext);
    const [searchTerm, setSearchTerm] = React.useState<number>(1);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(Number(e.target.value));
    }
    const handleSearch = () => {
        if(searchTerm >= 1) {
            context?.setQuery(searchTerm);
        }
    };

    return (
        <div className="search-bar-container">
            <input
                type="number"
                placeholder="Enter post number for search"
                value={searchTerm}
                onChange={onChange}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
        </div>
    );
};
