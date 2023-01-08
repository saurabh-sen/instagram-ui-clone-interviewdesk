import VideoCard from './VideoCard'

const Videos = () => {
  return (
    <div className='videos flex flex-wrap gap-10 relative'>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <div className="videos__showmore bg-[#0095f6] text-white font-semibold w-fit absolute bottom-0 right-[37%] mb-4 py-2 px-4 rounded-3xl cursor-pointer">
        <p>Show more posts from virat.kohli</p>
      </div>
    </div>
  )
}

export default Videos