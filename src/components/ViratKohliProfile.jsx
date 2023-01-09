import virat from '../assets/virat.jpg'
const ViratKohliProfile = () => {
  return (
    <div className='viratkohliprofile flex flex-row p-4'>
      {/* IMAGE CONTAINER */}
      <div className="container__image rounded-full flex w-[10.5rem] h-[10.5rem] items-center justify-center mx-16"
        style={{
          background: "linear-gradient(225deg, rgb(182, 34, 182), #fd5959, rgb(255, 255, 30))"
        }}
      >
        <img className='w-40 h-40 rounded-full m-2 border-[6px] border-solid border-white' src={virat} alt="virat kohli" />
      </div>
      {/* RIGHT CONTAINER */}
      <div className="container__text flex flex-1 flex-col ">
        {/* FIRST ROW */}
        <div className="text__header flex flex-row ">
          <div className="text__header__name text-xl flex flex-row items-center text-center">
            <span> virat.kohli</span> <span className="text__header__verified ml-2">
              <img className='w-5 h-[18px]' src="https://img.icons8.com/color/512/verified-badge.png" alt="verified" />
            </span>
            <button className="follow ml-8 bg-[#efefef] px-5 py-[6px] text-sm font-semibold rounded-lg hover:bg-[#dedede]">Follow</button>
            <button className="message ml-2 bg-[#efefef] px-5 py-[6px] text-sm font-semibold rounded-lg hover:bg-[#dedede]">Message</button>
            <button className="dots ml-4 text-4xl mt-[-25px] ">...</button>
          </div>
        </div>
        {/* SECOND ROW */}
        <div className="text__number flex flex-row mt-8">
          <p className="text__number__posts mr-8 hover:text-[#9b9999] cursor-pointer">
            <span className='font-semibold'>1,492</span> posts
          </p>
          <p className="text__number__posts hover:text-[#9b9999] cursor-pointer">
          <span className='font-semibold'>230M </span>
            followers
          </p>
          <p className="text__number__posts ml-8 hover:text-[#9b9999] cursor-pointer">
          <span className='font-semibold'>262</span> following
          </p>
        </div>
        {/* THRID ROW */}
        <div className="text__bio flex flex-col mt-5 text-sm">
          <p className="text__bio__name font-semibold">Virat Kohli</p>
          <p className="text__bio__description">Carpediem!</p>
          <p className="text__bio__link text-[#012d63] font-semibold hover:underline cursor-pointer">
            one8.com
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default ViratKohliProfile