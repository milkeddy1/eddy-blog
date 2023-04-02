import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export interface ChangelogProps {
}

export default function Changelog(props: ChangelogProps) {
  return (
    <div className='m-12'>
      <VerticalTimeline layout='1-column-left'>
        <VerticalTimelineElement date='2022/04/02'>
          haha
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          yoo
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          yoo
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          yoo
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          yoo
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          yoo
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          yoo
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
