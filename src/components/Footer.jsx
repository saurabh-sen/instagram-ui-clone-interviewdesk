import React from 'react'

const Footer = () => {

  const footerItems = ["Meta", "About", "Jobs", "Help", "API", "Privacy", "Terms", "Top Accounts", "Locations", "Instagram Lite" ,"Uploading & Non-Users", "Suggested Accounts"];

  return (
    <div className='footer'>
      <div className="footer__items text-xs text-gray-400 flex justify-between p-8 pt-16">
        {footerItems.map((item, index) => <span key={index} className="footer__item w-fit hover:underline cursor-pointer">{item}</span>)}
      </div>
      <div className="footer__copyrights text-xs text-gray-400 flex justify-evenly p-8 pt-4 pb-6 px-80">
        <span className='flex flex-row'>English <svg color='#9ca3af' fill='#9ca3af' className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span>
        <span>© 2023 Instagram from Meta</span>
      </div>
    </div>
  )
}

export default Footer