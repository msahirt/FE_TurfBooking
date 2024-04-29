import React from 'react'
import CusNavbar from '../../Components/Common/CusNavbar/CusNavbar'
import CourtListBody from '../../Components/CourtListBody/CourtListBody'

function CourtListPage() {
  return (
    <div className="d-flex flex-column vh-100 bg-body-secondary">
      <CusNavbar/>
      <CourtListBody/>
    </div>
  )
}

export default CourtListPage
