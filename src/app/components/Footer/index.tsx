import {
  SkipBack as IconSkipBack,
  SkipForward as IconSkipForward,
  Play as IconPlay,
  Repeat as IconRepeat,
  Shuffle as IconShuffle,
  Volume1 as IconVolume1,
  MonitorSpeaker as IconMonitorSpeaker,
  ListMusic as IconListMusic
} from 'lucide-react'
import Image from 'next/image'

export const Footer = () => (
  <footer className='bg-zinc-800 border-zinc-700 flex items-center justify-between sticky bottom-0 py-4 px-3'>
    <div className='flex items-center gap-3'>
      <Image
        src='/albums/os-mateadores-album.jpg'
        width={50}
        height={50}
        alt='Album from Os Mateadores'
      />
      <div className='flex flex-col'>
        <p className='font-normal'>Canta Sabiá</p>
        <p className='text-xs text-zinc-400'>Os Mateadores</p>
      </div>
    </div>

    <div className='flex flex-col items-center gap-2'>
      <div className='flex gap-5'>
        <button>
          <IconShuffle size={20} className='text-zinc-200' />
        </button>

        <button>
          <IconSkipBack size={20} className='text-zinc-200' />
        </button>

        <button className='ml-auto mr-4 p-2 rounded-full bg-green-500 text-black flex justify-center items-center'>
          <IconPlay size={20} className='pl-0.5 text-zinc-200' />
        </button>

        <button>
          <IconSkipForward size={20} className='text-zinc-200' />
        </button>

        <button>
          <IconRepeat size={20} className='text-zinc-200' />
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-sm text-zinc-400'>0:31</span>

        <div className='h-1 rounded-full w-96 bg-zinc-600'>
          <div className='bg-zinc-200 h-1 w-40 rounded-full'></div>
        </div>

        <span className='text-sm text-zinc-400'>3:00</span>
      </div>
    </div>

    <div className='flex gap-4 items-center'>
      <button>
        <IconListMusic size={20} />
      </button>

      <button>
        <IconMonitorSpeaker size={20} />
      </button>

      <button>
        <IconVolume1 size={20} />
      </button>

      <div className='h-1 rounded-full w-24 bg-zinc-600'>
        <div className='bg-zinc-200 h-1 w-10 rounded-full'></div>
      </div>
    </div>
  </footer>
)
