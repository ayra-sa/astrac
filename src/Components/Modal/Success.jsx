import './modal.css'

const Success = () => {
    return (
        <div className="modal">
            <img src={require('../../images/success.svg').default} alt="success" />
            <h2>Thank you</h2>
            <p>Thank you very much for applying for the free trial. Our sales team will be in touch with you shortly to inform you of the trial environment. Please wait for a while.</p>
            <button className='btn btn-primary'>Done</button>
        </div>
    )
}

export default Success