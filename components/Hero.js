import React from 'react';
import Topics from './Topics';
import RepositoryContainer from './repositoryContainer';
import Container from './Container';
import rep1 from '../public/assets/repImg1.png';
import rep2 from '../public/assets/repImg2.png';
import rep3 from '../public/assets/repImg3.png';
import rep4 from '../public/assets/repImg4.png';


// const images = [rep1,rep2,rep3,rep4];

const Hero = () => {
   const repData = [
        {
          image:rep1,
          star:'1.5k',
          name:'useMemo / memo',
          code:'An open-source, self-hosted memo hub with knowledge management and collaboration.',
          btns: ['react','go','docker','markdown','open-source','memo',
          'sqlite','collaboration','self-hosted','note-taking','knowledge-base']
        },
        {
          image:rep2,
          star:'2k',
          name:'novuhq / novu',
          code:'Port of OpenAIs Whisper model in C/C++',
          btns:['transformer','openai','speech-to-text','whisper'],
        },
        {
          image:rep3,
          star:'2.5k',
          name:'Oasis / Saad',
          code:'Christina is back with the latest developer news and open source projects! This week, we’re dubbing it CLI Week, because of all the CLI-heavy projects and news.',
          // btns:['transformer','openai','speech-to-text','whisper'],
        },
        {
          image:rep4,
          star:'4k',
          name:'runfinch / finch',
          code:'Testspace provides a dashboard for publishing test results from automation and a framework for implementing and executing manual tests using GitHub.', 
          btns: ['web','mobile','speech-to-voice','whitelist']
        },
      ];
  return (
    <div className='p-1 h-max md:p-9 md:pl-[62px] xl:pl-[500px] flex flex-col bg-[#0d1117]'>
      <h2 
      className='pb-5 text-gray-400 font-semibold text-[1.2rem]'
      >Here is Whats popular on Github today...</h2>
        {repData.map((data,i)=>(
          <Container 
          key={i}
          btns = {data.btns}
          image = {data?.image}
          name = {data.name}
          star = {data.star}
          code = {data.code} />
        ))}
    </div>
  )
}

export default Hero