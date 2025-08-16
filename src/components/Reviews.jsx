// sections/Reviews.jsx
import React from "react";
import ReviewSpace from "./Cards/ReviewSpace";

const Reviews = () => {
  const reviewsData = [
    {
      name: "Fatma B.",
      image: "profile-f.png", // mettre ton image ici
      review:
        "Verdanova Solutions a transformé notre présence numérique. Grâce à leur expertise en développement web et à leur approche sur-mesure, notre site web est désormais plus rapide, plus intuitif et parfaitement adapté à nos besoins",
      rating: 5,
    },
    {
      name: "Rami K.",
      image: "/profile-r.png",
      review:
        "Leur équipe est incroyablement professionnelle et réactive. Nos attentes ont été surpassées, et nous sommes ravis du résultat.",
      rating: 4,
    },
    {
      name: "Samiha T.",
      image: "/profile-s.png",
      review:
        "Collaborer avec Verdanova Solutions a été une excellente expérience. Leur créativité et leur savoir-faire sont exemplaires",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-200 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-10">
          Les avis de nos clients
        </h2>
        <div className="space-y-6">
          {reviewsData.map((r, idx) => (
            <ReviewSpace
              key={idx}
              name={r.name}
              image={r.image}
              review={r.review}
              rating={r.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
