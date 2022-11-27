import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';


import Navbar from '../../Pages/Shared/Navbar/Navbar';



const DashboardLayout = () => {
    const {user}=useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div className='py-6 bg-[#dfe6e9]'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content rounded">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side rounded">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#b2bec3] text-white">
                        <li><Link className='btn bg-[#a29bfe] mb-4' to="/dashboard">Dashboard</Link></li>
                        <li><Link className='btn bg-[#a29bfe] mb-4' to='/dashboard/myorders'>My Orders</Link></li>

                        {
                            isSeller && <>
                                <li><Link className='btn bg-[#a29bfe] mb-4' to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link className='btn bg-[#a29bfe] mb-4' to='/dashboard/myproduct'>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='btn bg-[#a29bfe] mb-4' to='/dashboard/allseller'>Manage Sellers</Link></li>
                                <li><Link className='btn bg-[#a29bfe] mb-4' to='/dashboard/allbuyer'>Manage Buyers</Link></li>
                                <li><Link className='btn bg-[#a29bfe] mb-4' to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link className='btn bg-[#a29bfe] mb-4' to='/dashboard/myproduct'>My Products</Link></li>

                            </>
                        }
                    </ul>
                </div>
            </div>
           
        </div>
        
    );
};

export default DashboardLayout;

