import Image from 'next/image';

export default function Dashboard(){
    return(
        <div className="flex h-screen bg-white">
            <aside className="w-52 bg-white text-[#317e56] border-[#317e56] p-6 shadow shadow-gray-200">
                <nav className="flex flex-col space-y-2 mt-10">
                    <a href="#" >Dashboard</a>
                    <a href="#" >Delivery</a>
                    <a href="#" >Recycling Center</a>
                    <a href="#" >Reward</a>
                    <a href="#" >History</a>
                    <a href="#" >Profile</a>
                    <a href="#" >About Us</a>
                    <a href="#" >Logout</a>
                </nav>
            </aside>

            <main className="flex-1 overflow-y-auto p-8">
                <div className="card1 relative overflow-hidden z-0 inset-0 shadow-right-bottom animate-slideup animate-delay-300
                items-center justify-center mb-18 mt-8">
                    <div>
                        <Image 
                        src="/image/dashboardutama.jpg"
                        alt="Dashboard Image1"
                        layout="fill"
                        objectFit="cover"
                        className="shadow-right-bottom opacity-50"
                        quality={80}
                    />
                    </div>
                    <div className='relative z-10 p-4 h-full'>
                    <h1 className='text-amber-50 text-6xl'>Welcome To xxx</h1>
                    <p className='text-amber-50 opacity-80'>wanna get rid of your waste? Let us take care it for you</p>
                    <p className='text-amber-50 absolute bottom-0 right-0 text-right p-4 z-50 opacity-80'>we provide efficient waste pickup services and waste collection 
                        to support better waste distribution. Our goal is to simplify 
                        the recycling and waste management process for communities, 
                        distributors, and producers of recycled goods.</p>
                    </div>
                </div>
                <div className='flex justify-center space-x-24 my-18'>
                    <div className='h-56 w-52 rounded-xl bg-white border-1 border-gray-100 shadow hover:shadow-xl flex flex-col justify-end
                    items-center transition-200'>
                        <Image
                            src="/image/pickup.png"
                            alt="Pickup"
                            width={100}
                            height={100}
                        />
                        <p className='text-center font-bold'>
                            Pickup
                        </p>
                        <p className='text-left opacity-50 text-sm px-4 pb-4 pl-5'>
                            pickup your waste anytime and anywhere
                        </p>
                    </div>
                    <div className='h-56 w-52 rounded-xl bg-white border-1 border-gray-100 shadow hover:shadow-xl flex flex-col justify-end
                    items-center transition-200 pt-4'>
                        <Image
                            src="/image/boxes.png"
                            alt="boxes"
                            width={90}
                            height={90}
                        />
                        <p className='text-center font-bold'>
                            Locate Our<br />
                            Nearest Box
                        </p>
                        <p className='text-left opacity-50 text-sm px-4 pb-4 pl-5'>
                            or throw it by yourself in several out boxes near you
                        </p>
                    </div>
                    <div className='h-56 w-52 rounded-xl bg-white border-1 border-gray-100 shadow hover:shadow-xl flex flex-col justify-end
                    items-center transition-200'>
                        <Image
                            src="/image/points.png"
                            alt="Points"
                            width={80}
                            height={80}
                        />
                        <p className='text-center font-bold'>
                            Earn Your Point
                        </p>
                        <p className='text-left opacity-50 text-sm px-4 pb-4 pl-5'>
                            after completing you got a reward with some points
                        </p>
                    </div>
                    <div className='h-56 w-52 rounded-xl bg-white border-1 border-gray-100 shadow hover:shadow-xl flex flex-col justify-end
                    items-center transition-200'>
                        <Image
                            src="/image/healthy.png"
                            alt="healthy"
                            width={120}
                            height={120}
                        />
                        <p className='text-center font-bold'>
                            Healthy Environment
                        </p>
                        <p className='text-left opacity-50 text-sm px-4 pb-4 pl-5'>
                            contribute with us to create a better environment
                        </p>
                    </div>
                </div>
                {/* Choose type of waste */}
                <div className='flex items-center space-x-16 my-18'>
                    <div>
                        <Image
                            src="/image/dashboard2.png"
                            alt="Choose Waste"
                            width={500}
                            height={500}
                            className="rounded-lg bg-white -scale-x-100"
                        />
                    </div>
                    <div>
                        <h1 className=' text-[#317e56] mb-6'>Choose Your Waste</h1>
                        <p className='text-left opacity-50 text-sm px-4 pb-4'>
                            Choose the type of waste you want to dispose of. 
                            We accept various types of waste, including plastic, paper, metal, and organic waste.
                        </p>
                        <div className='flex space-x-10'>
                            <div className='h-52 w-52 rounded-xl bg-white border-1 border-gray-100 shadow hover:shadow-xl flex flex-col justify-center
                            items-center transition-200'>
                                <Image
                                    src="/image/plastic.png"
                                    alt="Plastic"
                                    width={100}
                                    height={100}
                                />
                                <p className='text-center font-bold'>
                                    Plastic
                                </p>
                            </div>
                            <div className='h-52 w-52 rounded-xl bg-white border-1 border-gray-100 shadow hover:shadow-xl flex flex-col justify-center
                            items-center transition-200'>
                                <Image
                                    src="/image/paper.png"
                                    alt="Paper"
                                    width={100}
                                    height={100}
                                />
                                <p className='text-center font-bold'>
                                    Paper
                                </p>
                            </div>
                            <div className='h-52 w-52 rounded-xl bg-white border-1 border-gray-100 shadow hover:shadow-xl flex flex-col justify-center
                            items-center transition-200'>
                                <Image
                                    src="/image/metal.png"
                                    alt="Metal"
                                    width={100}
                                    height={100}
                                />
                                <p className='text-center font-bold'>
                                    Metal
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='card1 relative my-10'>
                    {/* Contact Us Section - New Addition */}
                    <div className='card1 relative my-10 bg-white rounded-lg shadow-lg p-8'>
                    <h1 className="text-3xl font-bold text-[#317e56] mb-6">Contact Us</h1>
                    
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-[#317e56] mb-4">How to Find Us</h2>
                        <p className="text-gray-600 mb-6">
                            If you have any questions, just fill in the contact form, and we will answer you shortly. 
                            If you are living nearby, come visit us at one of our comfortable offices.
                        </p>
                        
                        <div className="border-t-2 border-[#317e56]/20 pt-6">
                            <h3 className="text-lg font-medium text-[#317e56] mb-4">Headquarters</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-[#317e56] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-700">9867 MILL ROAD, CAMBRIDGE, M509 9941T</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-[#317e56] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-700">+1 800 603 6035</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-[#317e56] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700">mail@demolink.org</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-xl font-semibold text-[#317e56] mb-4">Get in Touch</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#317e56] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#317e56] focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea 
                                    id="message" 
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#317e56] focus:border-transparent"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="px-6 py-2 bg-[#317e56] text-white rounded-md hover:bg-[#2a6c48] transition-colors"
                            >
                                Send Message
                             </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}