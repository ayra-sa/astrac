import { Flex } from "../../Components/Section/Flex"
import TopImg from "../../Components/TopImg/TopImg"
import { Clarification } from "./SectionData/Clarification"
import { Flexible } from "./SectionData/Flexible"
import { sc } from "./SectionData/Sc"
import { Security } from "./SectionData/Security"
import { Work } from "./SectionData/Work"

const Product = () => {
    return (
        <>

        <div className="hero">
            <div className="container">
                <div className="center">
                    <span>Product</span>
                    <h1 className="hero-title mt-2">Many features to make your business communication...</h1>
                </div>
            </div>
        </div>

        <main className="main mb-10">
            <TopImg topImg={require('../../images/db-img.svg').default} />

            <div className="container">
                <div className="center">
                    <p>What is Astrac?</p>
                    <div className="text mt-2" style={{marginInline: 'auto'}}>
                        <p className="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque alias labore atque, rerum tempora sint? Corrupti quibusdam, reiciendis vero corporis ipsam officiis, earum optio dolor nam amet voluptates, laboriosam tempora!</p>

                    </div>
                </div>
                
                <Flex {...sc} />
                <Flex {...Clarification} />
                <Flex {...Flexible} />
                <Flex {...Work} />
                <Flex {...Security} />
            </div>
        </main>

        </>
    )
}

export default Product