import Head from 'next/head'
import { useState } from 'react'
import { setCurrentMode, useDarkMode } from '../common/darkMode';
import { MetaDataComp } from './components/MetaData'
import { WebsiteCard } from './components/WebsiteCard'

export default function Home() {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [loading, setLoading] = useState(false);

  useDarkMode();

  return (
    <div className='h-screen w-full pb-12 md:pb-4 flex flex-col items-center bg-slate-50 dark:bg-slate-900 transition-all duration-300'>
      <Head>
        <title>Website Card</title>
        <meta name="description" content="Generated url to a card" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <nav className='w-full container mx-auto px-10 py-6 flex items-center justify-between select-none'>
        <div className='flex items-center text-indigo-600 dark:text-indigo-500 font-bold text-2xl lg:text-4xl'>Website Card</div>
        <div className="cursor-pointer">
          <div onClick={() => setCurrentMode(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div onClick={() => setCurrentMode(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden dark:block dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
        </div>
      </nav>
      <div className='container h-full mx-auto mt-4 md:mt-12 px-10 flex flex-col flex-1 items-center justify-start'>
        <MetaDataComp updateData={setMetadata} loading={loading} setLoading={setLoading} />
        <div className='mt-4 max-w-full'>
          <WebsiteCard data={metadata} loading={loading} />
        </div>
      </div>
      <footer className='w-full text-sm text-center mt-4 pb-1 ease-in select-none'>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="pt-8 flex max-w-xs mx-auto items-center justify-center">
            <a href="https://github.com/xdlrt/website-card" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                </path>
              </svg>
            </a>
            <a href="https://twitter.com/yeshu_in_future" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 ml-4">
              <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                </path>
              </svg>
            </a>
            <span className='ml-4 transition-colors duration-200 text-gray-400 hover:text-gray-800 dark:hover:text-white cursor-pointer no-underline hover:no-underline'>@yeshu</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
