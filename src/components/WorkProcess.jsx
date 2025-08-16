import { ClipboardList, Lightbulb, Code, Rocket } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      icon: <ClipboardList className="w-10 h-10 text-green-600" />,
      title: "Analyse des besoins",
      description: "Nous écoutons attentivement vos besoins et objectifs pour comprendre votre vision."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-green-600" />,
      title: "Proposition de solution sur mesure",
      description: "Nous élaborons une stratégie et une solution parfaitement adaptées à votre projet."
    },
    {
      icon: <Code className="w-10 h-10 text-green-600" />,
      title: "Développement et tests",
      description: "Nous concevons et testons la solution pour garantir performance et fiabilité."
    },
    {
      icon: <Rocket className="w-10 h-10 text-green-600" />,
      title: "Déploiement et support",
      description: "Nous déployons la solution et assurons un suivi technique continu."
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-200" >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Notre Processus de Travail</h2>
        <p className="text-gray-600 mb-12">
          Un parcours clair et structuré pour transformer vos idées en solutions concrètes.
        </p>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full group-hover:scale-110 transition">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
