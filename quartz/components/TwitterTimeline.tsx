import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/twitterTimeline.scss"

interface TwitterTimelineOptions {
  // tweetLimit?: number
  // showReplies?: boolean
  // showRetweets?: boolean
}

const TwitterTimeline: QuartzComponentConstructor<TwitterTimelineOptions> = (opts) => {
  return function TwitterTimelineComponent() {
    return (
      <div className="twitter-timeline-wrapper">
        <a className="twitter-timeline"
           data-lang="en"
           data-dnt="true"
           data-tweet-limit="3"
           data-width="100%"
           data-height="280"
           data-chrome="noheader"
           // data-theme="dark"
           href="https://twitter.com/niccolozanotti?ref_src=twsrc%5Etfw">
      </a>
    <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
  </div>
    )
  }
}

TwitterTimeline.css = style
export default TwitterTimeline

