import React from 'react'
import HeaderPage from '../components/HeaderPage/HeaderPage'
import EmailForm from '../components/EmailForm/EmailForm'
import Footer from '../components/Footer/Footer'

function Company() {
    return (
        <div>
            <HeaderPage name="Компания" />
            <EmailForm />
            <Footer />
        </div>
    )
}

export default Company
