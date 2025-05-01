import {RevealOnScroll} from '../RevealOnScroll';
export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
       <RevealOnScroll>
       
        <div className="text-center z-10 px-4">
           
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-blue-400">Bienvenue,
            <small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">Je suis Nirinarivony.</small></span></h1>
                


            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
           Je suis un  Développeur Full-Stack passionné par la programmation informatique, je me spécialise dans la création d'applications web,desktop et mobile évolutives et performantes. Mon expérience en frontend 
            et backend me permet de concevoir des solutions innovantes adaptées aux besoins des utilisateurs.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Voir Projets</a>

<a href="#contact" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Veuillez me contacter
</span>
</a>

            </div>
        </div>
        </RevealOnScroll>
    </section>
}