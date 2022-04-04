import { useState } from "react"
import Tab from "../../../Components/Tab/Tab"

const PricingTab = () => {

    const tabData = [
        {
            name: 'Lite',
            month: 90,
            year: 98,
            detail: 'Best For Small Sized Teams',
            list: [
                'Data space 30GB', 'User limit 10 users', 'Email Support'
            ]
        },
        {
            name: 'Standard',
            month: 190,
            year: 198,
            detail: 'Best For Mid Sized Teams',
            list: [
                'Data space 100GB', 'User limit 50 user', 'Email Support'
            ],
            recommended: true
        },
        {
            name: 'Premium',
            month: 490,
            year: 498,
            detail: 'Best For Big Sized Teams',
            list: [
                'Data space 300GB', 'User limit 100 user', 'Email Support'
            ]
        },
        {
            name: 'Special',
            img: '/images/plan_img.svg',
            detail: 'Free capacity and users',
            list: [
                'Free data space', 'Free number of users'
            ]
        },
    ]

    const types = ['Year', 'Month']

    const [tabItem, settabItem] = useState(tabData)
    const [switchActive, setSwitchActive] = useState(types[0])

    return (
        <section id="pricing">
            <div className="container">
                <span>Free Trial</span>
                <h2>The best plan and cost to transform your business communication</h2>

                <div className="tab-switch mt-4">
                    {types.map(type => (
                        <div
                            key={type}
                            className={ switchActive === type ? 'switch active' : 'switch' } 
                            onClick={() => setSwitchActive(type)}>
                        {type}
                        </div>
                    ))}
                </div>

                <div>
                    <div className="tab">
                        {tabItem.map(item => (
                            <Tab key={item.name} {...item} active={switchActive} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingTab