import { mainModule } from 'process';
import React from 'react'
import Hello from './hello';

const Home = () => {
  console.log('What type of component am I?');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
          <div className='text-5xl flex-center underline'>
      Welcome to the first step of your journey!
    </div>
    <Hello />
    </main>


  )
}

export default Home
