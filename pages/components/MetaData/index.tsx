import { ChangeEvent, useEffect, useState } from "react"

interface MetaDataProps {
  updateData: (data: Metadata) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const MetaDataComp = (props: MetaDataProps) => {
  const { updateData, loading, setLoading } = props;
  const [url, setUrl] = useState('https://github.com/xdlrt/website-card')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }

  const fetchMetadata = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/fetchMetadata?url=${url}`)
      const json = await res.json()
      updateData(json)
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      // message.error(error?.message || 'Failed to fetch metadata');
    }
  }

  useEffect(() => {
    fetchMetadata();
  }, [])

  return (
    <div className='w-full md:flex'>
      <input type="text" className="w-full md:flex-1 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-transparent dark:text-white" placeholder="enter your website url" value={url} onChange={handleChange} />
      <button type="button" onClick={fetchMetadata} className="w-full mt-4 md:w-44 md:ml-4 md:mt-0 flex items-center justify-center py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg select-none">
        {loading && <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>}
        <span>{!loading ? 'generate now!' : ''}</span>
      </button>
    </div>
  )
}

export default MetaDataComp