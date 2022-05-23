import { t } from 'i18next'
// import { useEffect, useState } from 'react'
import Grid from '../../../Components/Section/Grid'
import { feature } from '../Data/FeatureData'

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
                {/* { Array.isArray(mdata) && mdata.map(item => (
                    <Grid key={item.title} {...item} />
                ))} */}

                {feature.map(f => (
                  <Grid key={f.title} {...f} />
                ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Features