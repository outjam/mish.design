import React from 'react'
import HeaderPage from '../components/HeaderPage/HeaderPage'
import EmailForm from '../components/EmailForm/EmailForm'
import Footer from '../components/Footer/Footer'

function Contact() {
    return (
        <div>
            <HeaderPage name="Контакты" />
            <EmailForm />
            <Footer />
        </div>
    )
}

export default Contact
