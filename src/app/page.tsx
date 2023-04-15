import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play as IconPlay } from 'lucide-react'

import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

const albumsList = [
  {
    name: 'Os Mateadores',
    thumbnail: '/albums/os-mateadores-album.jpg',
    thumbnailDescption: 'Album from Os Mateadores'
  },
  {
    name: 'Os Mateadores',
    thumbnail: '/albums/os-mateadores-album.jpg',
    thumbnailDescption: 'Album from Os Mateadores'
  },
  {
    name: 'Os Mateadores',
    thumbnail: '/albums/os-mateadores-album.jpg',
    thumbnailDescption: 'Album from Os Mateadores'
  },
  {
    name: 'Os Mateadores',
    thumbnail: '/albums/os-mateadores-album.jpg',
    thumbnailDescption: 'Album from Os Mateadores'
  },
  {
    name: 'Os Mateadores',
    thumbnail: '/albums/os-mateadores-album.jpg',
    thumbnailDescption: 'Album from Os Mateadores'
  },
  {
    name: 'Os Mateadores',
    thumbnail: '/albums/os-mateadores-album.jpg',
    thumbnailDescption: 'Album from Os Mateadores'
  },
  {
    name: 'Os Mateadores',
    thumbnail: '/albums/os-mateadores-album.jpg',
    thumbnailDescption: 'Album from Os Mateadores'
  },
  {
    name: 'Os Mateadores',
    thumbnail: '/albums/os-mateadores-album.jpg',
    thumbnailDescption: 'Album from Os Mateadores'
  }
]

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />

        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>

            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold mt-10 text-3xl'>Good Afternoon</h1>

          <div className='grid md:grid-cols-3 gap-4 mt-6 items-center gap-y-4 gap-x-6'>
            {albumsList.map((currentAlbum, index) => (
              <a
                className='group bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer'
                key={index}
              >
                <Image
                  src={currentAlbum.thumbnail}
                  width={80}
                  height={80}
                  alt={currentAlbum.thumbnailDescption}
                />

                <p className='font-semibold'>{currentAlbum.name}</p>

                <button className='ml-auto mr-4 p-2 rounded-full bg-green-500 text-black flex justify-center items-center invisible group-hover:visible'>
                  <IconPlay className='pl-0.5' />
                </button>
              </a>
            ))}
          </div>

          <h2 className='font-semibold mt-10 text-2xl'>
            Made for Thiago Nunes Batista
          </h2>

          <div className='grid md:grid-cols-3 lg:grid-cols-8 gap-4 mt-6 items-center gap-y-4 gap-x-6'>
            {albumsList.map((currentAlbum, index) => (
              <a
                className='group bg-white/10 rounded overflow-hidden flex 
                flex-col items-center gap-4 hover:bg-white/20 transition-colors p-4 cursor-pointer'
                key={index}
              >
                <div className='relative'>
                  <Image
                    src={currentAlbum.thumbnail}
                    width={120}
                    height={120}
                    alt={currentAlbum.thumbnailDescption}
                  />

                  <button className='absolute bottom-2 right-2 p-2 rounded-full bg-green-500 text-black flex justify-center items-center invisible group-hover:visible'>
                    <IconPlay className='pl-0.5' />
                  </button>
                </div>

                <p className='font-semibold'>{currentAlbum.name}</p>
              </a>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
