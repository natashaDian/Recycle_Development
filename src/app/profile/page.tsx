"use client";
import Image from 'next/image';
import { useContext } from 'react';

export default function ProfilePage() {
    const user = {
    name: "John Doe",
    email: "john@example.com"
    };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar - sama dengan dashboard */}
      <aside className="w-52 bg-white text-[#317e56] border-[#317e56] p-6 shadow shadow-gray-200">
        <nav className="flex flex-col space-y-2 mt-10">
          <a href="/dashboard">Dashboard</a>
          <a href="#">Delivery</a>
          <a href="#">Recycling Center</a>
          <a href="#">Reward</a>
          <a href="#">History</a>
          <a href="/profile" className="font-bold">Profile</a>
          <a href="#">About Us</a>
          <a href="#">Logout</a>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        {/* Header Profile */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#317e56]">My Profile</h1>
          <button className="px-4 py-2 bg-[#b5d685] text-[#317e56] rounded-md hover:bg-[#a3c577] transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Profile Info */}
          <div className="col-span-1 bg-white rounded-lg shadow-md p-6 border border-[#b5d685]">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/images/profile-avatar.jpg"
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-[#b5d685]"
                />
              </div>
              <h2 className="text-xl font-bold text-[#317e56]">{user?.name || 'User Name'}</h2>
              <p className="text-gray-500 mb-4">{user?.email || 'user@example.com'}</p>
              
              <div className="w-full space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since:</span>
                  <span className="font-medium">Jan 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Points:</span>
                  <span className="font-medium text-[#317e56]">1,250 pts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#317e56] mb-6 border-b pb-2 border-[#b5d685]">
              Account Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="p-2 bg-gray-50 rounded-md border border-gray-200">
                  {user?.name || 'John Doe'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="p-2 bg-gray-50 rounded-md border border-gray-200">
                  {user?.email || 'john@example.com'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="p-2 bg-gray-50 rounded-md border border-gray-200">
                  +1 (234) 567-8900
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <div className="p-2 bg-gray-50 rounded-md border border-gray-200">
                  123 Green Street, Eco City
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#f8faf3] rounded-lg p-6 border border-[#b5d685]">
            <div className="flex items-center">
              <div className="p-3 bg-[#b5d685] rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-500">Completed Pickups</h4>
                <p className="text-2xl font-bold text-[#317e56]">24</p>
              </div>
            </div>
          </div>
          
                    <div className="bg-[#f8faf3] rounded-lg p-6 border border-[#b5d685]">
                      <div className="flex items-center">
                        <div className="p-3 bg-[#b5d685] rounded-full mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-500">Scheduled Pickups</h4>
                          <p className="text-2xl font-bold text-[#317e56]">5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            );
          }