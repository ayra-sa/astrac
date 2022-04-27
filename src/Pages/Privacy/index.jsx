import { Particle } from "../../Components/Particles/Particle"
import TopImg from "../../Components/TopImg/TopImg"

const Privacy = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="center">
                        <span>Privacy Policy</span>
                        <h2 className="mt-2 hero-title">The best privacy and security policy that we provide for you</h2>
                    </div>
                </div>
                <Particle />
            </div>

            <main className="main mb-mobo" style={{ marginBottom: '20%' }}>
                <div className="container">
                    <TopImg topImg='/images/topImg.svg' />

                    <div className="mt-4">
                        <h1>Privacy Policy</h1>
                        <p className="mt-4">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>

                        <h2 className="mt-4">What information do we collect?</h2>
                        <p className='mt-2'>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>

                        <h2 className="mt-4">Use of Information</h2>
                        <p className='mt-2'>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>

                        <h2 className="mt-4">Use of Cookies</h2>
                        <p className='mt-2'>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Privacy