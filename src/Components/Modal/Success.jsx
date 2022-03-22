import './modal.css'

const Success = ({ setIsOpen }) => {

    return (
        <div className="modal">
            <div className="dialog">
                <img src={require('../../images/success.svg').default} alt="success" />
                <h2 className='mt-2'>Thank you</h2>
                <p className='mt-2'>Thank you very much for applying for the free trial. Our sales team will be in touch with you shortly to inform you of the trial environment. Please wait for a while.</p>
                <button className='btn btn-primary mt-2' onClick={() => setIsOpen(false)}>Done</button>
            </div>
        </div>
    )
}

export default Success