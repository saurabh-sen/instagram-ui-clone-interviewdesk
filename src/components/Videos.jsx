import VideoCard from './VideoCard'
import { videosData } from './videosData'

const Videos = () => {
  return (
    <div className='videos flex flex-wrap gap-10 relative'>
      {
        videosData.map((video) => {
          return <VideoCard key={video.id} image={video.image} likes={video.likes} comments={video.comments}  />
        })
      }
      
      <div className="videos__showmore bg-[#0095f6] text-white font-semibold w-fit absolute bottom-0 right-[37%] mb-4 py-2 px-4 rounded-3xl cursor-pointer">
        <p>Show more posts from virat.kohli</p>
      </div>
    </div>
  )
}

export default Videos