import imageMobile from "../assets/images/image-web-3-mobile.jpg"
import imageDesktop from "../assets/images/image-web-3-desktop.jpg"

export const MainArticle = () => {
    return (
      <section>
        <picture>
            <source media="(max-width:640px)" srcSet={imageMobile}/>
            <source media="(min-width:641px)" srcSet={imageDesktop} />
            <img src={imageMobile} alt="Articulo principal imagen" />
           
        </picture>
      </section>
    )
}