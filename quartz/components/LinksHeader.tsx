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
            <img src={"https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Notebook/3D/notebook_3d.png"}></img>
            <a href="/Uni/Uni">Uni notes</a>
          </span>
          <span>
            <img src={"https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Globe%20showing%20europe-africa/3D/globe_showing_europe-africa_3d.png"} alt={"Globe Africa+Europe"}></img>
            <a href="/Research/Research">Research</a>
          </span>
          <span>
            <img src={"https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Classical%20building/3D/classical_building_3d.png"}></img>
            <a href="/Structure">Content structure</a>
          </span>
          <span>
            <img src={"https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Face%20with%20monocle/3D/face_with_monocle_3d.png"}></img>
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
