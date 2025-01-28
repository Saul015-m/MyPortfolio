import about1 from "../assets/projects/Questions.png"

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Qui suis-je?</h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-xl" src={about1} alt="img-about1" />    
                </div>
            </div>
            <div className="w-full lg:w-1/2 ">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">
                    Étudiant en Master 1 en SDIA à l’EMIT,
je cherche une <span className="font-bold">alternance</span> . Je propose
mes compétences en <span className="font-bold">UI/UX design</span>,
<span className="font-bold">React.js</span> et <span className="font-bold">Tailwindcss</span> pour créer
des interfaces modernes et intuitives,
tout en améliorant l’expérience
utilisateur. Mon expérience en
<span className="font-bold">communication</span> au club EMIT’Orat me
permet de bien <span className="font-bold">collaborer en équipe.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About