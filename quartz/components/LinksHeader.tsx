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
            <img alt={"Pile of books icon"}>📚</img>
            <a href="/Uni/Uni">Uni notes</a>
          </span>
          <span>
            <img alt={"Earth icon"}>🌍</img>
            <a href="/Research/Research">Research</a>
          </span>
          <span>
            <img alt={"Building icon"}>🏛️</img>
            <a href="/Structure">Content structure</a>
          </span>
          <span>
            <img alt={"Person icon"}>👤</img>
            <a href="/About-me">About me</a>
          </span>
          {/*<span>*/}
          {/*  <img src=".svg"></img>*/}
          {/*  <a href="/relative-path">Maths</a>*/}
          {/*</span>*/}
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
