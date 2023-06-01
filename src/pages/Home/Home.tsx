import Card from "../../components/Card/Card";
import { ICardProps } from "../../types/ICardProps";
import { cardData } from "../../data/sample_card_data";

export default function Home() {
  return (
    <div className="home">
      {cardData.map((card: ICardProps) => (
        <Card {...card}/>
      ))}
    </div>
  );
}
