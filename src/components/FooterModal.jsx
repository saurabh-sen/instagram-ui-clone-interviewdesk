import React, { useState } from 'react'

const FooterModal = () => {
    const [showModal, setShowModal] = useState(true);
    return (
        <>
            {showModal ? (
                <>
                    <div className="sticky bottom-0 left-0 right-0 z-10 overflow-y-auto text-white">
                        <div
                            className="w-[8px] h-[8px] absolute z-10 right-5 top-4 cursor-pointer"
                            onClick={() => setShowModal(false)}
                        >
                            <svg color='#878889' fill='#878889' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill='currentColor' d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                            </svg>
                        </div>
                        <div className="flex items-center bg-[#000000cc] backdrop-filter backdrop-blur-md ">
                            <div className="relative w-full p-4 mx-auto flex flex-row shrink-0 justify-between items-center m-auto py-7 px-3 " style={{
                                maxWidth: "calc(935px + 40px)",
                            }}>
                                <div className="footermodal__left flex flex-row items-center">
                                    <div className="footermodal__logo border-white border-[3px] p-2 rounded-full mr-4">
                                        <svg color='white' fill='white' className='w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill='currentColor' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                        </svg>
                                    </div>
                                    <div className="footermodal__text flex flex-col">
                                        <span className='font-semibold'>Log into Instagram</span>
                                        <span>Log in to see photos and videos from friends and discover other accounts you'll love.</span>
                                    </div>
                                </div>
                                <div className="footermodal__buton flex flex-col">
                                    <button className='bg-[#0095f6] text-white p-1 px-8 rounded-md'>Log in</button>
                                    <button className='text-[#0095f6] pt-3' >Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default FooterModal