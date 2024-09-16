import { ArrowRightIcon } from "../icons";

function Sections() {

  const SECTIONS = [
    {
      title: 'ABOUT ME',
      className: 'flex flex-col justify-between w-1/4 hover:bg-red-600 duration-200 border-r border-black dark:border-white'
    },
    {
      title: 'EXPERIENCE',
      className: 'flex flex-col justify-between w-1/4 hover:bg-blue-600 duration-200 border-r border-black dark:border-white'
    },
    {
      title: 'SIDE PROJECTS',
      className: 'flex flex-col justify-between w-1/4 hover:bg-violet-600 duration-200 border-r border-black dark:border-white'
    },
    {
      title: 'CONTACT',
      className: 'flex flex-col justify-between w-1/4 hover:bg-green-600 duration-200'
    },
  ]

  return (
    <div className='flex h-screen'>
      { SECTIONS.map((sec, index) => (
        <div
          key={index}
          className={sec.className}
        >
          <div className='text-3xl text-center mt-24'>
            { sec.title }
          </div>
          <div></div>
          <div className='flex justify-end w-full p-4'>
            <div className='w-12 h-12 rounded-full border border-black dark:border-white'>
              <ArrowRightIcon className='cursor-pointer' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sections;
