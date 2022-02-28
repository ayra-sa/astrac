import {MdKeyboardArrowRight} from 'react-icons/md'

const Grid = ({ dataList }) => {
    return (
        <div className="row-3 mt-4">
                {dataList.map(data => (
                    <div className="item">
                        <div className="icon-box">
                            <img src={data.icon} alt='icon' />
                        </div>
                        <h1 className="title-small">{data.title}</h1>
                        <p className="subtitle">{data.info}</p>
                        { data.button ? (<a href="#" className='btn-transparent mt-4'>
                            Learn more <MdKeyboardArrowRight />
                        </a>) : null  }            
                    </div>
                ))}
            </div>
    )
}

export default Grid