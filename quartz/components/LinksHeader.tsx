/* Defines the Links in the Header
 */
import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <img>📓</img>
            <a href="/Uni/Uni">Uni</a>
          </span>
        <span>
            <img>🏛️</img>
        <a href="/Structure">Structure</a>
      </span>
    <span>
      <img>🌎</img>
    <a href="/Research/Research">Research</a>
  </span>
   <span>
      <img>👤</img>
    <a href="/About-me">About me</a>
    </span>
    {/*<span>*/
    }
    {/*  <img src=".svg"></img>*/
    }
    {/*  <a href="/relative-path">Maths</a>*/
    }
    {/*</span>*/
    }
  </div>
    <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
