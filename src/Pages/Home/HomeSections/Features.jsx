import { t } from 'i18next'
// import { useEffect, useState } from 'react'
import Grid from '../../../Components/Section/Grid'

const Features = () => {

    const mdata = t(`dataFeatures`, {returnObjects: true})

    return (
        <section id="features" className="section">
        <div className="container">
          <div className="features-wrap center">
            <p className="top-menu">FEATURES</p>
            <h1 className="title">What the Features of Product</h1>
            <p className="subtitle">Features are highlighted here</p>

            <div className="row-3 mt-4">
                { Array.isArray(mdata) && mdata.map(item => (
                    <Grid key={item.title} {...item} />
                ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Features