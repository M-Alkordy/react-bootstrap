import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.css'
import { useRef } from 'react'
const NavBar = ({ logo, items , btn }) => {
    const nav = useRef(null)
    window.addEventListener("scroll" , ()=>{
        if (window.scrollY > 20) {
            nav.current.style.background = "white"
        }else{
            nav.current.style.background = "none"
        }
    })
    return (
        <Navbar expand="lg" ref={nav} className='position-fixed top-0 w-100 z-3'>
            <Container fluid className='justify-content-evenly'>
                <Navbar.Brand href="#" className='d-flex logo align-items-center gap-1'><img src={logo?.img} alt={logo?.text} /><h1 className='text-heading fs-3'>{logo?.text}</h1></Navbar.Brand>
                <Button variant="primary" className='rounded-pill bg-my-primary order-md-1'>{btn}</Button>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
                    <Nav
                        className="me-auto my-2 my-lg-0 gap-4"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {items?.map((element, index) => {
                            return (
                                <Nav.Link key={index} href={`#${element?.id}`}>{element?.name}</Nav.Link>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar