import MyResume from '../assets/SohrabYavari.pdf'


const Resume = () => {
  return (
    <>
      <div>
        <h1 className='w-full text-center font-bold text-5xl py-5 hover:tracking-widest duration-300 ease-in-out'>My Resume</h1>
        <embed src={MyResume} className="mx-auto py-4 w-11/12 h-screen" />
      </div>
    </>
  )
}

export default Resume