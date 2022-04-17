import { Link } from 'react-router-dom'
import './AllOfYour.css'


const AllOfYour = () => {
    return (
        <div className="all-of-your" data-aos="zoom-in">
          <div className="aoy-left">
            <h1>All Of Your Work In Astrac</h1>
            <p className="mt-2">
              Contact Us To Start Free Trial Or If You Have Any Question
            </p>
          </div>
          <div className="aoy-right">
            <Link to='/'><button className="btn btn-secondary">Contact</button></Link>
            <Link to='/'><button className="btn btn-primary bg-white">Free Trial</button></Link>
          </div>
        </div>
      //   <div className="container">
      // </div>
    )
}

export default AllOfYour