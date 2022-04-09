import { Fragment } from "react";

interface CardProps {
  data: Metadata | null
  loading: boolean
}

export const WebsiteCard = (props: CardProps) => {
  const { data } = props
  if (!data) return <Fragment />

  return (
    <div className="bg-white dark:bg-slate-800 md:flex items-center w-120 max-w-4xl md:h-36 shadow-lg rounded-md overflow-hidden transition-all duration-300">
      <img src={data.image} className='max-h-full' />
      <div className="h-36 md:h-full p-4 flex flex-col flex-auto justify-between">
        <div className="text-base font-semibold max-w-full w-xs md:max-w-xs xl:max-w-xl dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">{data.title}</div>
        <div className="text-xs dark:text-slate-400 max-w-xs xl:max-w-2xl line-clamp-3">{data.description}</div>
        <div className="flex items-center">
          <img src={data.logo} className='w-4 mr-2' />
          <div className="text-xs dark:text-white">{data.author || data.publisher}</div>
        </div>
      </div>
    </div >
  )
}

export default WebsiteCard