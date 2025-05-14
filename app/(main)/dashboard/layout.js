import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const DashboardLayout = () => {
    return (
        <div className='px-5 '>
            <h1 className='text-6xl font-bold gradient gradient-title'>Dashboard</h1>

            {/* dashboard page */}
            <Suspense fallback={<BarLoader className='mt-4' width="100%" color="#2563eb" />}>
                <DashboardPage />
            </Suspense>
        </div>
    )
}

export default DashboardLayout