import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const index = () => {
  return (
    <div id='contact'>
<footer class="text-center text-lg-start bg-white text-muted mt-12">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className='flex justify-between w-[80%] mx-auto'>
    <h1>
    Get connected with us on social networks:
    </h1>

    <div className='text-xl'>
      <a href="" className="me-4 link-secondary">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="" className="me-4 link-secondary">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="" className="me-4 link-secondary">
        <FontAwesomeIcon icon={faGoogle} />
      </a>
      <a href="" className="me-4 link-secondary">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="" className="me-4 link-secondary">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="" className="me-4 link-secondary">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>

    </div>
    <hr  className='mt-2'/>
  </section>


  <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="#">Unityworks.com</a>
  </div>
</footer>
    </div>
  )
}

export default index
