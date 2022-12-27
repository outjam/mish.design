import React from 'react'
import HeaderPage from '../components/HeaderPage/HeaderPage'
import FilterPage from '../components/FilterPage/FilterPage'
import EmailForm from '../components/EmailForm/EmailForm'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'

function Project() {
    return (
        <div>
            <HeaderPage name="Проекты" />
            <FilterPage />
            <div className="projectGridPage">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <EmailForm />
            <Footer />
        </div>
    )
}

export default Project
