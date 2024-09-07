import { Button } from 'react-bootstrap'
import './Hero.css'
import { FaCirclePlay } from 'react-icons/fa6'
const Hero = ({bgImg , img , title , desc , firstBtn , secBtn , children}) => {
    return (
        <div className='hero vh-100 position-relative'>
            <img src={bgImg} alt="" className='w-100 h-100' />
            <div className="items position-absolute top-50 start-50 translate-middle text-center pt-5">
                <h1 className='text-center'>{title?.first} <span className='text-my-primary'>{title?.sec}</span></h1>
                <p className="desc text-center py-2">{desc}</p>
                <div className="btns text-center">
                    <Button variant="primary" className='rounded-pill bg-my-primary order-md-1'>{firstBtn}</Button>
                    <Button variant="link">{children} {secBtn}</Button>
                </div>
                <img src={img}  alt="" className='w-50' />
            </div>
        </div>
    )
}

export default Hero