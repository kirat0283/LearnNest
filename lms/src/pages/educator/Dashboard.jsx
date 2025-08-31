import React,{useContext, useEffect, useState} from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/loading'

const Dashboard = () => {
  const {currency} = useContext(AppContext)
  const [dashboardData,setDashboardData] = useState(null)

  const fetchDashboardData = async()=>{
    setDashboardData(dummyDashboardData)
  }
  useEffect(()=>{
    fetchDashboardData()
  },[])

  return dashboardData ?(
    <div className="min-h-screen flex flex-col items-start gap-8 md:p-10 p-6 
      ">
      
      {/* Top Stats */}
      <div className="flex flex-wrap gap-6 items-center">
        
        <div className="flex items-center gap-3 shadow-md border border-purple-200 
        p-5 w-56 rounded-xl bg-white hover:shadow-lg transition">
          <img src={assets.patients_icon} alt="students" className="w-10 h-10"/>
          <div>
            <p className="text-2xl font-semibold text-purple-700">
              {dashboardData.enrolledStudentsData.length}
            </p>
            <p className="text-sm text-gray-600">Total Enrollments</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shadow-md border border-purple-200 
        p-5 w-56 rounded-xl bg-white hover:shadow-lg transition">
          <img src={assets.appointments_icon} alt="courses" className="w-10 h-10"/>
          <div>
            <p className="text-2xl font-semibold text-purple-700">
              {dashboardData.enrolledStudentsData.length}
            </p>
            <p className="text-sm text-gray-600">Total Courses</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shadow-md border border-purple-200 
        p-5 w-56 rounded-xl bg-white hover:shadow-lg transition">
          <img src={assets.earning_icon} alt="earnings" className="w-10 h-10"/>
          <div>
            <p className="text-2xl font-semibold text-purple-700">
              {currency}{dashboardData.totalEarnings}
            </p>
            <p className="text-sm text-gray-600">Total Earnings</p>
          </div>
        </div>

      </div>

      {/* Latest Enrollments */}
      <div className="w-full">
        <h2 className="pb-4 text-xl font-semibold text-gray-800">Latest Enrollments</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden 
          rounded-xl bg-white border border-gray-200 shadow-sm">
          
          <table className="table-fixed md:table-auto w-full">
            <thead className="text-gray-900 border-b border-gray-200 text-sm bg-purple-50/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
                <th className="px-4 py-3 font-semibold">Student Name</th>
                <th className="px-4 py-3 font-semibold">Course Title</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              {dashboardData.enrolledStudentsData.map((item,index)=>(
                <tr key={index} className="border-b border-gray-200 hover:bg-purple-50/30">
                  <td className="px-4 py-3 text-center hidden sm:table-cell">{index+1}</td>
                  <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                    <img src={item.student.imageUrl} alt="Profile" 
                      className="w-9 h-9 rounded-full object-cover border border-gray-200"/>
                    <span className="truncate">{item.student.name}</span>
                  </td>
                  <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  ) :  <Loading/>
}

export default Dashboard
