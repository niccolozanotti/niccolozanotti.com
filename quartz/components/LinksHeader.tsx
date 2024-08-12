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
            <img
              src={"https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Classical%20building/3D/classical_building_3d.png"}></img>
            <a href="/Structure">Structure</a>
          </span>
          <span>
            <img
              src={"https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Notebook/3D/notebook_3d.png"}></img>
            <a href="/Uni/Uni">Uni</a>
          </span>
          <span>
            <img
              src={"https://raw.githubusercontent.com/niccolozanotti/niccolozanotti.com/6b995849952c3696472fb37bc0c0c1d98221a167/icons/globe.svg"}
              alt={"Globe Africa+Europe"}></img>
            <a href="/Research/Research">Research</a>
          </span>
          <span>
            <img
              src={"https://raw.githubusercontent.com/niccolozanotti/niccolozanotti.com/ec15c75e013f7f1f3136688029d59dc222f11f28/icons/person.svg"}></img>
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
