import { useState } from "react"
import Tab from "../../../Components/Tab/Tab"

const FreeTrialTab = () => {

    const tabData = [
        {
            name: 'Premium',
            price: 98,
            detail: 'The best plan',
            list: [
                'Data space 30GB', 'Data space 30GB', 'Data space 30GB'
            ],
            recommended: false
        },
        {
            name: 'Premium',
            price: 98,
            detail: 'The best plan',
            list: [
                'Data space 30GB', 'Data space 30GB', 'Data space 30GB'
            ],
            recommended: true
        },
        {
            name: 'Premium',
            price: 98,
            detail: 'The best plan',
            list: [
                'Data space 30GB', 'Data space 30GB', 'Data space 30GB'
            ],
            recommended: false
        },
    ]

    const [tabItem, settabItem] = useState(tabData)
    const [switchActive, setSwitchActive] = useState(0)

    return (
        <section id="free-trial">
            <div className="container">
                <span>Free Trial</span>
                <h2>The best plan and cost to transform your business communication</h2>

                <div className="tab-switch mt-4">
                    <div className={ switchActive === 0 ? 'switch active' : 'switch' } onClick={() => setSwitchActive(0)}>Year</div>
                    <div className={ switchActive === 1 ? 'switch active' : 'switch' } onClick={() => setSwitchActive(1)}>Month</div>
                </div>

                <div>
                    <div className={ switchActive === 0 ? 'tab' : 'hidden' }>
                        {tabItem.map(item => (
                            <Tab key={item.name} {...item} />
                        ))}
                    </div>
                    <div className={ switchActive === 1 ? 'tab' : 'hidden' }>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga rerum odit atque minus libero tempore deserunt dignissimos modi, est neque nihil, rem perferendis consequatur at debitis quibusdam tenetur quaerat ab?</h2>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FreeTrialTab