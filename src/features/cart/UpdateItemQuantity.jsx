import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  function handleIncreaseItem() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseItem() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
      className="gap-6  md:gap-3">
      <Button type="round" onClick={handleDecreaseItem}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={handleIncreaseItem}>
        +
      </Button>
    </div>
  );
}
