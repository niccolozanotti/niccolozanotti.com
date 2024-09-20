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

          <a href="/">Home</a>
        </span>
        <span>
            <img>📓</img>
        <a href="/Uni/Uni">Uni</a>
      </span>
    <span>

    <a href="/Projects/Projects">Projects</a>
  </span>
    <span>
      <img>👤</img>
    <a href="https://niccolozanotti.com">About me</a>
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
