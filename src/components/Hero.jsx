import profil from "../assets/projects/M-Saul-1.png"
import cv from "../assets/projects/CV-Mamy.pdf"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >
                        RABESON Mamy
                    </h1>
                    <span className="bg-gradient-to-r from-amber-50 via-amber-400 to-amber-50 bg-clip-text text-4xl tracking-tight text-transparent">
                        UI/UX Designer & Frontend Développeur
                    </span>
                    <div className="mt-10">
                        <a href={cv} download="CV-Mamy.pdf">
                            <button className="bg-transparent border border-amber-500 hover:bg-amber-50 text-amber-500 font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                <span>Téléchargez mon CV ici</span>
                            </button>   
                        </a>
                          
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-10">
                <div className="flex justify-center rounded-xl">
                    <img src={profil} alt="pdp" className="w-80" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero