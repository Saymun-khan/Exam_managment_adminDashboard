import React from 'react'
import { CgAdd, CgBandAid, CgBee, CgFacebook, CgGitBranch, CgInstagram, CgProfile, CgTwitter } from 'react-icons/cg'
import FooterCard from './FooterCard'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SidebarRight from './SidebarRight'
import StarStudents from './StarStudents'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <div className='flex-3 bg-slate-100 h-screen w-72 text-white font-semibold'>
                <Sidebar />
            </div>
            <div>
            <div className='p-8 flex'>
                <SidebarRight Text="TOTAL STUDENTS" TextNumber="3280" TextDescription="80% increase in 20 Days" BackgroundColor="bg-blue-500" Icon={CgBandAid}/>

                <SidebarRight Text="NEW STUDENTS" TextNumber="245" TextDescription="50% increase in 20 Days" BackgroundColor="bg-amber-500" Icon={CgAdd}/>

                <SidebarRight Text="TOTAL COURSE" TextNumber="28" TextDescription="76% increase in 20 Days" BackgroundColor="bg-violet-500" Icon={CgProfile}/>

                <SidebarRight Text="FEES COLLECTION" TextNumber="25160" TextDescription="30% increase in 20 Days" BackgroundColor="bg-red-500" Icon={CgBee} />
               
                
            </div>
            <div className='grid grid-cols-2'>
                <div className='w-100 h-auto bg-slate-200 rounded-md ml-8'>
                    <h1 className='text-xl font-bold text-neutral-900 p-4 ml-4'>Star Students</h1>
                    <StarStudents />
                </div>
                <div className='w-100 h-auto bg-slate-200 rounded-md ml-8'>
                    <h1 className='text-xl font-bold text-neutral-900 p-4 ml-4'>Student Activities</h1>
                </div>
            </div>
            <div className='p-8 flex'>
                    <FooterCard Text='Follow us on facebook' TextNumber='3596' BackgroundColor="bg-blue-500" Icon={CgFacebook} />

                    <FooterCard Text='Follow us on twietter' TextNumber='98564' BackgroundColor="bg-blue-500" Icon={CgTwitter} />

                    <FooterCard Text='Follow us on insta' TextNumber='45864' BackgroundColor="bg-blue-400" Icon={CgInstagram} />

                    <FooterCard Text='Follow us on github' TextNumber='458951' BackgroundColor="bg-blue-500" Icon={CgGitBranch} />
            </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Dashboard