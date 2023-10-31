import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin, setAdminLoading] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && <li><Link to='/dashboard/allusers' className='mt-3'>All Users</Link></li>
                        }
                        {
                            isAdmin && <li><Link to='/dashboard/add-doctors' className='mt-3'>Add Doctors</Link></li>
                        }
                        {
                            isAdmin && <li><Link to='/dashboard/manage-doctors' className='mt-3'>Manage Doctors</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;