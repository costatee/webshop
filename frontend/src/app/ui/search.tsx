'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@material-tailwind/react';

export default function Search({ placeholder }: { placeholder: string }) {
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
  }, 300);

  return (
    <div className="flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        className="py-2 px-2 text-sm placeholder:text-gray-500 !border-t-blue-gray-200 focus:!border-t-gray-900"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()} 
        crossOrigin={undefined}      
      />
    </div>
  );
}
