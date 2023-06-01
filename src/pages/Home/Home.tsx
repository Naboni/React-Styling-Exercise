import Card from "../../components/Card/Card";
import { cardData } from "../../data/sample_card_data";
import { ICardProps } from "../../types/ICardProps";


export default function Home() {
  return (
    <div className="home">
      {cardData.map((card: ICardProps) => (
        <Card {...card}/>
      ))}
    </div>
  );
}
