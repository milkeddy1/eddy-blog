import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from "next/image"
import 'react-vertical-timeline-component/style.min.css';
import changelogConfig from "./changelogConfig"
export interface ChangelogProps {
}

export default function Changelog(props: ChangelogProps) {

  return (
    <div className='m-12'>
      <VerticalTimeline >
        <div className='flex flex-col-reverse'>
          {changelogConfig.map((item) => {
            const { title, date, img, description, link } = item
            return <VerticalTimelineElement key={title} date={date} contentStyle={{ color: 'white' }}>
              <div>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='text-black'>{description}</p>
                <br />
                {img && <Image src={img} alt={title} />}
                {link && <a className='text-black underline hover:text-[#525252]' href={link} target="_blank">連結</a>}
              </div>
            </VerticalTimelineElement>
          })}
        </div>
      </VerticalTimeline>
    </div >
  );
}