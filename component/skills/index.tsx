import { ProgressBar } from '../progress-bar';
import { Title } from '../title';

export const Skills = () => {
  const data = [
    {
      title: 'Html',
      percentage: 100,
    },
    {
      title: 'Css',
      percentage: 100,
    },
    {
      title: 'Javascript',
      percentage: 100,
    },
    {
      title: 'Typescript',
      percentage: 70,
    },
    {
      title: 'PHP',
      percentage: 60,
    },
    {
      title: 'React',
      percentage: 90,
    },
    {
      title: 'Vue Js',
      percentage: 90,
    },
    {
      title: 'Next Js',
      percentage: 90,
    },
    {
      title: 'Angular',
      percentage: 60,
    },
    {
      title: 'Code Igniter',
      percentage: 60,
    },
    {
      title: 'Git',
      percentage: 100,
    },
    {
      title: 'My Sql',
      percentage: 60,
    },
  ];
  return (
    <div>
      <Title>Skills</Title>
      <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
        {data.map((it, index) => (
          <div key={index}>
            <ProgressBar title={it.title} percentage={it.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
};
