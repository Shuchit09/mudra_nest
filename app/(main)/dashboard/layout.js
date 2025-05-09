import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'
import DashboardPage from './page'


function DashboardLayout() {
    return (
        <div className='px-5'>
            <h1 className='text-6xl font-bold gradient gradient-title mb-5'>Dashboard</h1>

            {/* Dashboard Page */}
            <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color='#3f33ea' />}>

                <DashboardPage />

            </Suspense>
        </div>
    )
}

export default DashboardLayout