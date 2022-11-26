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
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#2A4DB7] text-white">
                        <li><Link className='btn bg-secondary' to="/dashboard">Dashboard</Link></li>
                        <li><Link className='btn bg-secondary' to='/dashboard/allseller'>My Orders</Link></li>

                        {
                            isSeller && <>
                                <li><Link className='btn bg-secondary' to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link className='btn bg-secondary' to='/dashboard/myproduct'>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='btn bg-secondary' to='/dashboard/allseller'>All Sellers</Link></li>
                                <li><Link className='btn bg-secondary' to='/dashboard/allbuyer'>Add Buyers</Link></li>

                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

