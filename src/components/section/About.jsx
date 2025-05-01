import { RevealOnScroll } from '../RevealOnScroll';
// import {reactimg} from '/assets/img/CSS3.png';
import reactLogo from '/assets/img/React.png';
import angularLogo from '/assets/img/AngularJS.png';
import tailwindLogo from '/assets/img/TailwindCSS.png';
import bootstrapLogo from '/assets/img/bootstrap.png';
import nodejsLogo from '/assets/img/Node.js.png';
import mysqlLogo from '/assets/img/MySQL.png';
import pythonLogo from '/assets/img/Python.png';
import javaLogo from '/assets/img/Java.png';
import laravelLogo from '/assets/img/laravel.png';
import nestjsLogo from '/assets/img/nestjs.png';
import postgresLogo from '/assets/img/PostgresSQL.png';
import springbootLogo from '/assets/img/springboot.png';
export const About = () => {

    const frontendSkills = [
        "React",
        "Angular",
        "TailwindCSS",
        "Bootstrap","CSS"];

    const backendSkills = [
        "Node.js",
        "SpringBoot",
        "Python",
        "Java",
        "Laravel",
        "NestJS",
        "Postgres"
    ]

    const skillsWithLogos = [
        { name: "React", src: reactLogo },
        { name: "Angular", src: angularLogo },
        { name: "TailwindCSS", src: tailwindLogo },
        { name: "Bootstrap", src: bootstrapLogo },
        { name: "Node.js", src: nodejsLogo },
        { name: "SpringBoot", src: springbootLogo },
        { name: "Python", src: pythonLogo },
        { name: "Java", src: javaLogo },
        { name: "Laravel", src: laravelLogo },
        { name: "NestJS", src: nestjsLogo },
        { name: "Postgres", src: postgresLogo }
    ];

    const SkillHexagon = ({ name, src }) => (
        <div className="w-28 h-32 relative flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-blue-500/10 border border-blue-500 clip-hexagon flex items-center justify-center">
                <img src={src} alt={name} className="w-10 h-10 object-contain" />
            </div>
            <p className="text-sm text-white mt-2">{name}</p>
        </div>
    );
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Mon propos</h2>

                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Développeur passionné, doté d'une expérience dans la création d'applications évolutives et le développement de solutions innovantes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                        {tech}

                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {skillsWithLogos.filter(skill => frontendSkills.includes(skill.name)).map((skill, index) => (
                                        <SkillHexagon key={index} name={skill.name} src={skill.src} />
                                    ))}
                                </div>


                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                        {tech}

                                    </span>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {skillsWithLogos.filter(skill => backendSkills.includes(skill.name)).map((skill, index) => (
                                        <SkillHexagon key={index} name={skill.name} src={skill.src} />
                                    ))}
                                </div>
                        </div>
                    </div>


                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Formations universitaires</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>1ère annee de Licence en Développement d'Application Internet Intranet </strong>-EMIT Universite de Fianarantsoa
                            </li>
                            <li>
                                <strong>2ème annee de Licence en Développement d'Application Internet Intranet </strong>-EMIT Universite de Fianarantsoa
                            </li>
                            <li>
                                <strong>3ème annee de Licence en Développement d'Application Internet Intranet </strong>-EMIT Universite de Fianarantsoa
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Experiences Professionnelles</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Développeur Full-stack  chez Service Export Import Technology(2024) </h4>
                                <p>Mise en place  d'une application de gestion d'intervention pour l'espace client</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </RevealOnScroll>
    </section>;
};