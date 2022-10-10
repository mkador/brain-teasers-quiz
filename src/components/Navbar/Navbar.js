import React, { useState } from 'react';
import Link from '../navLink/Link';
import { Bars4Icon,XCircleIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
    const [open,setOpen] = useState(false)
    const routes = [
        {
            id:1,name:'Home',path:'/home'
        },
        {
            id:2,name:'Take a Quiz',path:'/quiz'
        },
        {
            id:3,name:'About',path:'/about'
        },
        {
            id:4,name:'Statistics',path:'/statistics'
        },
    ]
    return (
        <div>
           <nav className='bg-slate-700 w-full'>
           
           {
                open?
                <XCircleIcon onClick={()=>setOpen(!open)} className="h-10 w-10 text-black md:hidden"/>:
                <Bars4Icon onClick={()=>setOpen(!open)} className="h-10 w-10 text-black md:hidden"/> 
            }
            
                <ul className={`bg-slate-700 w-full md:static md:flex justify-center absolute duration-700 ${open ? 'top-10': 'top-[-200px]'}`}>
                    {
                        routes.map(route=> <Link key={route.id} route={route}></Link>)
                    }
                </ul>
           </nav>
           
        </div>
    );
};

export default Navbar;