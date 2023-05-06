import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Image from 'next/image';
import 'react-vertical-timeline-component/style.min.css';
import { useColorMode } from '@/store';
import changelogConfig from '../../utils/changelogs';

// export interface ChangelogProps {}

export default function Changelog() {
  const { mode } = useColorMode();

  const isDarkMode = mode === 'dark';

  return (
    <div className="m-12">
      <VerticalTimeline lineColor={isDarkMode ? 'white' : '#1F2937'}>
        <div className="flex flex-col-reverse">
          {changelogConfig.map((item) => {
            const {
              title, date, img, description, link,
            } = item;
            return (
              <VerticalTimelineElement
                key={title}
                date={date}
                contentStyle={{
                  color: isDarkMode ? '#1F2937' : 'white',
                  backgroundColor: isDarkMode ? 'white' : '#1F2937',
                }}
                iconStyle={{
                  background: isDarkMode ? 'white' : '#1F2937',
                }}
              >
                <div>
                  <h2
                    style={{ color: isDarkMode ? '#1F2937' : 'white' }}
                    className="text-2xl font-bold text-white"
                  >
                    {title}
                  </h2>
                  <p>{description}</p>
                  <br />
                  {img && (
                    <Image src={img} alt={title} width={300} height={300} />
                  )}
                  {link && (
                    <a
                      className="underline hover:text-[#525252]"
                      href={link}
                      target="_blank"
                    >
                      連結
                    </a>
                  )}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </div>
      </VerticalTimeline>
    </div>
  );
}
