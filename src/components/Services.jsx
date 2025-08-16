import ServiceCard from "./Cards/ServiceCard";

const projectList = [
    {
        img: "/AI.gif",
        title: "Intelligence Artificielle",
        description: "Nous utilisons l'IA pour automatiser vos tâches et améliorer l'efficacité de vos processus. Profitez de solutions intelligentes pour analyser des données et prédire des tendances.",
    },
    {
        img: "/consultant-technique.gif",
        title: "Consultation Technique",
        description: "Obtenez des conseils experts pour optimiser vos projets, choisir les bonnes technologies et résoudre vos défis techniques efficacement.",
    },
    {
        img: "/cloud-solutions.gif",
        title: "Solution Cloud",
        description: "Avec nos solutions Cloud, vous pouvez stocker et gérer vos données en toute sécurité, tout en accédant à vos fichiers depuis n'importe où et à tout moment..",
    },
    {
        img: "/development.gif",
        title: "Développement Web et Mobile",
        description: "Nous créons des sites web et des applications mobiles adaptés à vos besoins. De l’idée à la réalisation, nous vous accompagnons à chaque étape.",
    },
];

function Projects() {
    return (
        <section id="services" className="py-16 px-6 bg-gradient-to-b from-green-200 to-white  text-center">
            <h2 className="text-4xl font-bold mb-8">Nos Services</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {projectList.map((project, index) => (
                    <ServiceCard
                        key={index}
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        
                    />
                ))}
            </div>
        </section>
    );
}
export default Projects;
