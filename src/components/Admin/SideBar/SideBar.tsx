import Link from 'next/link'
import React from 'react'
import NavlinkAdmin from '../NavlinkAdmin/NavlinkAdmin'
import { MdDashboard, MdDoorBack, MdOutlineCategory, MdOutlineDoorBack, MdOutlineDoorFront, MdOutlineEmail } from 'react-icons/md'
import { FaCartPlus, FaFileInvoiceDollar, FaRegComments, FaUsers } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoIosCube } from "react-icons/io";
import { RiArticleLine } from "react-icons/ri";

export default function SideBar() {
  const logout = () => {

  }
  return (
    <div className='w-2/12 sticky left-0 top-5 h-full flex flex-col gap-2'>
      <NavlinkAdmin href='/admin/dashboard' icon={<MdDashboard />} name='Dashboard' />
      <NavlinkAdmin href='/admin/pages' icon={<IoIosCube />} name='Pages' />
      <NavlinkAdmin href='/admin/products' icon={<FaCartPlus />} name='Products' />
      <NavlinkAdmin href='/admin/blogs' icon={<RiArticleLine />} name='Blogs' />
      <NavlinkAdmin href='/admin/users' icon={<FaUsers />} name='Users' />
      <NavlinkAdmin href='/admin/category' icon={<MdOutlineCategory />} name='Category' />
      <NavlinkAdmin href='/admin/comments' icon={<MdOutlineEmail />} name='Comments' />
      <NavlinkAdmin href='/admin/messages' icon={<FaRegComments />} name='Messages' />
      <NavlinkAdmin href='/admin/payment' icon={<FaFileInvoiceDollar />} name='Payments' />
      <NavlinkAdmin href='/admin/setting' icon={<IoSettingsOutline />} name='Setting' />
      <button type='button' onClick={logout} className={`flex items-center p-2 rounded-xl  justify-strat gap-2`}>
        <i className={`bg-white text-slate-800 text-lg p-2 shadow-md rounded-lg`}><MdDoorBack /></i>
        <span>
          Log out
        </span>
      </button>
    </div>
  )
}
