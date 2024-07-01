import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@material-tailwind/react';
import { ramenMenuData, CardData } from "../ui/menu/ramen-menu";

interface SearchProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void; // Update to accept searchTerm of type string
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);

    // Call onSearch with the searchTerm (term)
    onSearch(term);
  }, 300);

  return (
    <div className="flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        className="py-2 px-2 text-sm placeholder:text-gray-500 !border-t-blue-gray-200 focus:!border-t-gray-300"
        placeholder={placeholder}
        type="text"
        variant='static'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()} 
        crossOrigin={undefined}      
      />
    </div>
  );
};

export default Search;
