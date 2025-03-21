import {RevealOnScroll} from '../RevealOnScroll';
import eCommerceImage from '/assets/img/e_commerce1.png';
import gestint from '/assets/img/g_int.png';
import gestventes from '/assets/img/gventes.png';
import { useState } from 'react';
export const Projects = () => {

    const [modalOpen, setModalOpen] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const getImageDimensions = (imageSrc) => {
        const img = new Image();
        img.onload = () => {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
          alert(`Taille réelle de l'image : ${width}px x ${height}px`);
        };
        img.onerror = () => {
          alert("Erreur : impossible de charger l'image.");
        };
        img.src = imageSrc; // Charge l'image
      };


    // const openImageInNewWindow = (imageSrc) => {
    //     const img = new Image();
    //     img.onload = () => {
    //       const width = img.naturalWidth;
    //       const height = img.naturalHeight;
    //       const newWindow = window.open('', '_blank');
    //       newWindow.document.write(`
    //         <html>
    //           <body>
    //             <img src="${imageSrc}" alt="Image en taille réelle">
    //             <p>Taille : ${width}px x ${height}px</p>
    //           </body>
    //         </html>
    //       `);
    //     };
    //     img.src = imageSrc;
    //   };
    return (<section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            {""}
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Projets Recents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">E-commerce</h3>
                    <img
                                src={eCommerceImage} // Remplacez par le chemin réel
                                alt="Capture d'écran du projet E-commerce"
                                className="w-full h-auto rounded-lg mb-4 object-cover"
                            />
                    <p className="text-gray-400 mb-4">
                        Mise en place d'une application de vente de produits en ligne
                    </p>
                    <img src="/assets/img/e_commerce1.png" alt="" />
                    <div>
                        {["Laravel", "Node.js", "Bootstrap", "PostgreSQL"].map((tech, key) => (
                            <span

                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        {/* <button  onClick={() => openImageInNewWindow('/assets/img/e_commerce1.png')}
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                            View</button> */}
                            {/* <button
                  onClick={() => getImageDimensions('/assets/img/e_commerce1.png')}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </button> */}
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Gestion de vente de produits</h3>
                    <img
                                src={gestventes} // Remplacez par le chemin réel
                                alt="Capture d'écran du projet E-commerce"
                                className="w-full h-auto rounded-lg mb-4 object-cover"
                            />
                    <p className="text-gray-400 mb-4">
                        Mise en place d'une application de gestion de vente de produits
                    </p>
                    <div>
                        {["SpringBoot", "AngularJS", "TailwindCSS", "PostgreSQL"].map((tech, key) => (
                            <span

                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        {/* <a href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                            View Project</a> */}
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Gestion d'intervention</h3>
                    <img
                                src={gestint} // Remplacez par le chemin réel
                                alt="Capture d'écran du projet E-commerce"
                                className="w-full h-auto rounded-lg mb-4 object-cover"
                            />
                    <p className="text-gray-400 mb-4">
                        Mise en place d'un  calendrier dynamique reflétant la disponnibilté des techniciens 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["ReactJS", "NestJS", "TailwindCSS", "PostgreSQL"].map((tech, key) => (
                            <span

                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        {/* <a href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                            View Project</a> */}
                    </div>
                </div>

                {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    <p className="text-gray-400 mb-4">
                        Scalable cloud infrastructure
                    </p>
                    <div>
                        {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                            <span

                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >
                            View Project</a>
                    </div>
                </div> */}
            </div>
        </div>
        </RevealOnScroll>
        {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <img src="/assets/img/e_commerce1.png" alt="Image en taille réelle" />
            <p className="mt-2 text-center">
              Taille : {imageDimensions.width}px x {imageDimensions.height}px
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
    );
};