import { Mafs, LaTeX, Coordinates, Plot, Theme } from "mafs"
import { useEffect } from "react"
export const Sin = () => {
  useEffect(() => {
    let all = document.querySelectorAll('.MafsView')
    all.forEach(e => {
      e.style.setProperty('--mafs-bg', '#060606');
      e.style.setProperty('--mafs-fg', '#dfdddd');
    })
  }, [])
  return (
    <div class="my-8 rounded-lg">
      <Mafs>
        <Coordinates.Cartesian />
        <Plot.OfX y={Math.sin} color={Theme.blue} />
        <Plot.OfX y={Math.cos} color={Theme.pink} />
      </Mafs>
    </div>
  )
}

export const MathBlock = ({ children }) => {
  return <>
    <Mafs>
      <LaTeX
        at={[0, 0]}
        tex={String.raw`
        ${children}
        `}
      />
    </Mafs>
  </>
}
