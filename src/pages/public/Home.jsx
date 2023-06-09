import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/operations";
import { getProducts } from "../../redux/products/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (products) {
    // console.log(products);
  }

  return (
    <div className="mx-auto">
      <header className="App-header">
        <p>Home</p>
      </header>

      {products &&
        products.map((el) => (
          <ul key={el._id} className="grid grid-cols-5 gap-4">
            <li>{el.title}</li>
            <li>белки: {el.protein}</li>
            <li>жиры: {el.fats}</li>
            <li>углеводы: {el.carbohydrates}</li>
            <li>ккал: {el.kcal}</li>
          </ul>
        ))}
    </div>
  );
};

export default Home;
