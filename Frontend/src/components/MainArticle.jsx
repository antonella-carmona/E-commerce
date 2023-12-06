import imageMobile from "../assets/images/image-web-3-mobile.jpg"
import imageDesktop from "../assets/images/image-web-3-desktop.jpg"



export const MainArticle = () => {
    return (
      <section>
        <picture>
            <source media="(max-width:640px)" srcSet={imageMobile}/>
            <source media="(min-width:641px)" srcSet={imageDesktop}/>
            <img src={imageMobile} alt="Articulo principal imagen" className="w-full"/>
           
        </picture>

        <div className="sm:flex">  
        <div className="flex-1 py-6">
            <h2 className="text-[40px] font-bold sm:text-[58px] leading-none">Titulo descriptivo</h2>
        </div>

        <div className="flex-1 pt-9">
            <p className="text-[15px] mb-10 sm:text-[18px]">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxx
            </p>
            <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-Offwhite hover:bg-VeryDarkBlue">boton</button>
        </div>
        </div>
      </section>
    )
}