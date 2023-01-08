const VideoCard = ({ image, likes, comments }) => {
  return (
    <div className='VideoCard'>
      <div className='VideoCard__container text-white'>
        <div className='VideoCard__container__image relative hover:opacity-60 cursor-pointer'>
          <img className='w-[280px] h-[280px]' src={image} alt="virat" />
          <div className="VideoCard__container__icon absolute top-2 right-[7px]">
            <svg aria-label="Clip" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 24 24" width="18">
              <path d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z" fillRule="evenodd">
              </path>
            </svg>
          </div>
          <div className='VideoCard__container__info absolute flex flex-row w-full h-full top-0 left-[26%] opacity-0 hover:opacity-100 '>
            <div className="info__likes flex flex-row items-center mr-8"><svg width="18" height="18" color='white' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='currentColor' d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg><span className='font-semibold ml-[0.4rem]'>{likes}</span></div>
            <div className="info__comments flex flex-row items-center mr-8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color='white' fill='white' width="18" height="18" >
              <path fill='currentColor' d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
            </svg><span className='font-semibold ml-[0.4rem]'>{comments}</span></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default VideoCard