import Navbar from '../components/Navbar'
import AdminPanel from '../components/Admin'

export default function AdminPage() {
  return (
    <div className="bg-[#0b1411] min-h-screen">
      <Navbar />
      <AdminPanel />
    </div>
  )
}
