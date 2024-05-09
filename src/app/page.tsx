import Image from 'next/image'


type Data = {
  title: string;
  date: string;
  description: string;
}

const DATA: Data[] = [
  {
    date: 'November 2018 - Present',
    title: 'Pied Piper',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere illum quae adipisci a, impedit, id recusandae cum quis doloribus ipsam, delectus quisquam. Excepturi iure facere eaque doloribus esse quaerat soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis iure qui ea praesentium error necessitatibus ipsa provident quo aperiam harum architecto, quia explicabo. Nobis perspiciatis voluptas assumenda veniam fugiat.'
  },
  {
    date: 'April 2017 - October 2018',
    title: 'Aviato',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere illum quae adipisci a, impedit, id recusandae cum quis doloribus ipsam, delectus quisquam. Excepturi iure facere eaque doloribus esse quaerat soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis iure qui ea praesentium error necessitatibus ipsa provident quo aperiam harum architecto, quia explicabo. Nobis perspiciatis voluptas assumenda veniam fugiat.'
  },
  {
    date: 'May 2015 - Mars 2017',
    title: 'Hooli',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere illum quae adipisci a, impedit, id recusandae cum quis doloribus ipsam, delectus quisquam. Excepturi iure facere eaque doloribus esse quaerat soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis iure qui ea praesentium error necessitatibus ipsa provident quo aperiam harum architecto, quia explicabo. Nobis perspiciatis voluptas assumenda veniam fugiat.'
  },
];


// HEADER
const Header = () => {
  return (
    <div className='flex w-full justify-between border-b-2 border-blue-600'>
      <div className='flex flex-col'>
        <div className='text-4xl text-white pl-4 pt-10 font-bold'>Jesus</div>
        <div className='text-white pl-7 py-3 text-sm'>JavaScript fanboy, coffeine addict and proud Toyota owner.
        </div>
      </div>
      <Image src="/images/jeezus.png" alt={'Mynd af jesus'} width={120} height={50} className=' absolute top-3 right-3 rounded-full' />
    </div>

  )
}

// Ferilskrá
const CVWrapper = () => {
  return (
    <>
      {DATA.map((item, i) => (
        <CV key={item.title} date={item.date} description={item.description} title={item.title} />
      ))}
    </>
  )
}


// Þetta er function
// ({ það sem að þú ætlar að setja i þennan koða}: Typeið ( Data )) => 
const CV = ({ date, description, title }: Data) => {
  return (
    <>
      <div className='text-2xl text-white pl-4 pt-5'>{`${title}`}</div>
      <div className='text-base text-blue-500 pl-4'>{date}</div>
      <div className='text-white font-thin pl-8 py-3 text-sm'>{description}</div>
    </>
  )
}



const ParentComponent = () => {
  return <div className='flex flex-col w-full h-full min-h-screen bg-gray-800'>
    <Header />
    <CVWrapper />
  </div>
}


export default function Home() {
  return <ParentComponent />
}

