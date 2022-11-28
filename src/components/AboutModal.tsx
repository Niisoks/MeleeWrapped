import Modal       from 'react-modal';
import {
  FontAwesomeIcon,
}                  from '@fortawesome/react-fontawesome';
import {
  faGithub,
}                  from '@fortawesome/free-brands-svg-icons';
import twitterlogo from '../images/twitter.png';
import omnomnado   from '../images/omnomnado.jpg';
import slippilogo  from '../images/slippilogo.svg';
import sandralogo  from '../images/sandra.jpg';
import marahlogo   from '../images/marahlogo.jpg';

Modal.setAppElement('#root');

interface AboutModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const modal_style = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#dddddd',
    borderRadius: '1em',
    padding: 0,
    fontSize: '1.3em',
    width: '30em',
  },
};

const profiles_style = {
  borderColor: 'var(--accent-green)',
  borderStyle: 'solid',
  borderWidth: '5px',
  borderRadius: '50%',
  width: '4em',
  height: '4em',
  marginRight: '1em',
};

const AboutModal = ({ open, setOpen }: AboutModalProps) => {

  const closeModal = () => {
    setOpen(false);
  };

  return <div>
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={modal_style}
    >
      <div style={{
        background: 'var(--dark-2)',
        color: 'var(--light-1)',
        textAlign: 'center',
        padding: '0.5em',
        fontSize: '1.2em',
      }}>
        About
      </div>
      <div style={{
        padding: '1em',
        background: 'var(--dark-1)',
        color: 'var(--light-1)',
      }}>
        <span style={{fontSize: '0.8em', textJustify: 'inter-word'}}>
          This site's obvious inspiration is the yearly Spotify Wrapped, but designed for Melee.
          It's just a fun way of looking back at your year and how you did.<br/>
          When processing the games it will take a few minutes, as it has to go through each
          interaction of each game. This process is done completely on the client side, so your data
          is never sent to a server.
          <br/>
          The code is open source, so feel free to contribute!
          <br/>
          <br/>
          This project is not associated with Slippi or the Slippi team.
        </span>
        <div className="flex flex-row items-center" style={{marginBottom: '1em', marginTop: '1em'}}>
          <img style={profiles_style} src={marahlogo} alt="marah"/>
          <div>
            <div className='flex flex-row'>
              Marah &nbsp;
              <a href="https://twitter.com/projectslippi" target="_blank" rel="noreferrer">
                <img src={twitterlogo} style={{width: '1.5em'}} alt="marah twitter link"/>
              </a>
              <a href="https://github.com/CMarah" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} style={{marginRight: '0.5em', cursor: 'pointer'}}/>
              </a>
            </div>
            <span style={{fontSize: '0.8em'}}>Site's main dev</span>
          </div>
        </div>
        <div style={{
          marginTop: '1em',
          marginBottom: '0.5em',
          fontSize: '1.2em',
        }}>
          Acknowledgements
        </div>
        <div className="flex flex-row items-center" style={{marginBottom: '1em'}}>
          <img style={profiles_style} src={slippilogo} alt="slippi"/>
          <div>
            <div className='flex flex-row'>
              The Slippi team &nbsp;
              <a href="https://twitter.com/projectslippi" target="_blank" rel="noreferrer">
                <img src={twitterlogo} style={{width: '1.5em'}} alt="slippi team twitter link"/>
              </a>
            </div>
            <span style={{fontSize: '0.8em'}}>For their invaluable work on Slippi.</span>
          </div>
        </div>
        <div className="flex flex-row items-center" style={{marginBottom: '1em'}}>
          <img style={profiles_style} src={omnomnado} alt="omnomnado"/>
          <div>
            <div className='flex flex-row'>
              Omnomnado &nbsp;
              <a href="https://twitter.com/omnomnado" target="_blank" rel="noreferrer">
                <img src={twitterlogo} style={{width: '1.5em'}} alt="omnomnado twitter link"/>
              </a>
            </div>
            <span style={{fontSize: '0.8em'}}>Melee Wrapped logo and design help.</span>
          </div>
        </div>
        <div className="flex flex-row items-center" style={{marginBottom: '1em'}}>
          <img style={profiles_style} src={sandralogo} alt="omnomnado"/>
          <div>
            <div className='flex flex-row'>
              Sandrew Bkmn &nbsp;
              <a href="https://twitter.com/SandrewBkmn" target="_blank" rel="noreferrer">
                <img src={twitterlogo} style={{width: '1.5em'}} alt="sandrew twitter link"/>
              </a>
            </div>
            <span style={{fontSize: '0.8em'}}>Character turnip icons.</span>
          </div>
        </div>
      </div>
    </Modal>
  </div>;
};
export default AboutModal;
