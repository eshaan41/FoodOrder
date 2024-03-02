import { currencyFormatter } from "../util/formatting";
import Button from "./UI/button";

export default function MealItem({ meals }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meals.image}`} alt={meals.name} />
        <div>
          <h3>{meals.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meals.price)}
          </p>
          <p className="meal-item-description">{meals.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
