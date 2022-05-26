import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState ('text-animate')
    const refForm = useRef()

    useEffect(() => {
        function hover(){
        return setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }
    hover()
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8nc29xb', 'template_apd8srd', refForm.current, 'xM-X19dc1lNvTJrj5')
          .then(() => {
              alert('Message successfully sent!')
              window.location.reload(false)
          }, () => {
              alert('Failed to send the message, please try again')
          });
      };

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm very ambitious front-end developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                            <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                        </form>
                    </div>
                   
                </div>
                <div className='info-map'>
                        Clive Makunga
                        <br/>
                        Zimbabwe,
                        <br/>
                        The City Of Bulawayo.<br/>
                        Cowdry Park.<br/>
                        <span>bostonclive24@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-20.073525, 28.506264]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[-20.073525, 28.506264]}>
                            <Popup>These are my coordnates!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact    