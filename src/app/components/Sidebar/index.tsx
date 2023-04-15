import {
  Home as IconHome,
  Search as IconSearch,
  Library as IconLibrary
} from 'lucide-react'

export const Sidebar = () => (
  <aside className='w-72 bg-zinc-950 p-6'>
    <nav className='flex flex-col'>
      <a href='' className='flex gap-4 text-sm font-semibold h-10 items-center'>
        <IconHome />
        Home
      </a>
      <a href='' className='flex gap-4 text-sm font-semibold h-10 items-center'>
        <IconSearch />
        Search
      </a>
      <a href='' className='flex gap-4 text-sm font-semibold h-10 items-center'>
        <IconLibrary />
        Your library
      </a>
    </nav>

    <hr className='my-4 border-zinc-800' />

    <nav className='flex flex-col gap-3'>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
        Playlist 1
      </a>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
        Playlist 2
      </a>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
        Playlist 3
      </a>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
        Playlist 4
      </a>
    </nav>
  </aside>
)
