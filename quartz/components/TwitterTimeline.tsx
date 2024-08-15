// import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import style from "./styles/twitterTimeline.scss"
// import { h } from "preact"
//
// const TwitterTimeline: QuartzComponentConstructor = (opts) => {
//   const Component = (props: QuartzComponentProps) => {
//     return (
//       <div className="twitter-timeline-container">
//         <a className="twitter-timeline" href="https://twitter.com/GoogleDeepMind?ref_src=twsrc%5Etfw">Tweets by
//           GoogleDeepMind</a>
//         <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
//       </div>
//     )
//   }
//
//   Component.css = style
//   return Component
// }
//
// export default TwitterTimeline

// import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import style from "./styles/twitterTimeline.scss"
//
// interface TwitterTimelineOptions {
//   tweetLimit?: number
// }
//
// const TwitterTimeline: QuartzComponentConstructor<TwitterTimelineOptions> = (opts) => {
//   return function TwitterTimelineComponent() {
//     return (
//       <div className="twitter-timeline">
//         <a
//           className="twitter-timeline"
//           href="https://twitter.com/DeepLearningAI?ref_src=twsrc%5Etfw"
//           data-tweet-limit={opts.tweetLimit || 3}  // Default to 5 tweets if not specified
//         >
//           Tweets by Niccolo Zanotti
//         </a>
//         <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
//       </div>
//     )
//   }
// }
//
// TwitterTimeline.css = style
// export default TwitterTimeline

//----
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/twitterTimeline.scss"

interface TwitterTimelineOptions {
  tweetLimit?: number
  showReplies?: boolean
  showRetweets?: boolean
}

const TwitterTimeline: QuartzComponentConstructor<TwitterTimelineOptions> = (opts) => {
  return function TwitterTimelineComponent() {
    return (
      <div className="twitter-timeline-wrapper">
        <a className="twitter-timeline" data-lang="en" data-dnt="true" data-tweet-limit="3" data-width="100%"
           data-height="350" href="https://twitter.com/niccolozanotti?ref_src=twsrc%5Etfw"></a>
        <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    )
  }
}

TwitterTimeline.css = style
export default TwitterTimeline

