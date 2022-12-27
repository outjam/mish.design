import React from 'react'
import HeaderPage from '../components/HeaderPage/HeaderPage'
import FilterPage from '../components/FilterPage/FilterPage'
import EmailForm from '../components/EmailForm/EmailForm'
import CardPost from '../components/Card/CardPost'
import Footer from '../components/Footer/Footer'

function Blog() {

    return (
        <div>
           <HeaderPage name="Блог" />
           <FilterPage />
           <div className="postGridPage">
                <CardPost />
                <CardPost />
                <CardPost />
                <CardPost />
                <CardPost />
            </div>
           <EmailForm />
           <Footer />
        </div>
    )
}

export default Blog
