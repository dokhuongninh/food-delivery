import HeadlineCard from "./HeadlineCard";

import { headlineCards } from "../constants";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {headlineCards.map((headlineCard) => (
        <HeadlineCard key={headlineCard.id} data={headlineCard} />
      ))}
    </div>
  );
};

export default HeadlineCards;
