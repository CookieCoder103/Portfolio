import LinkedIn from './../../assets/linkedin.svg'
import GitHub from './../../assets/github.svg'

const Footer = () => {
  return (
    <div className='py-4 flex flex-col mx-auto items-center bg-secondary'>
      <div className="py-2 text-2xl">More on Me:</div>
      <div className="flex gap-5 pb-12">
        <a
          id="profile-link"
          href="https://github.com/CookieCoder103"
          target="_blank"
        >
          <img
          className='hover:bg-white rounded-full ease-in-out duration-300' 
          src={GitHub} 
          />
        </a>

        <a
          id="profile-link"
          href="https://www.linkedin.com/in/sam-yavari-a3aa65198/"
          target="_blank"
        >
          <img 
          className='hover:bg-white rounded-full ease-in-out duration-300' 
          src={LinkedIn}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
