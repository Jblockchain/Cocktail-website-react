import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchcoctails } from "../Redux/feature/cocktailSlice";
import SpinnerAnim from "../Components/shared/SpinnerAnim";
import { Link } from "react-router-dom";
import SearchBox from "../Components/shared/SearchBox";

const HomePage = () => {
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcoctails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    } else setModifiedCocktails([]);
  }, [cocktails]);

  if (loading) {
    return <SpinnerAnim />;
  }
  if(!cocktails){
    return (<Layout><h2>no cocktail found with this name</h2></Layout>)
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <Layout>
      <SearchBox/>
      <div className="container">
        <div className="row">
          {modifiedCocktails.map((item) => (
            <div className="col-md-3 mt-3 m-1" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.glass}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link to={`/products/${item.id}`} className="btn btn-primary">
                    Details 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
