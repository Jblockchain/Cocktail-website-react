import React from "react";
import Layout from "../Components/Layout";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchsinglecoctails } from "../Redux/feature/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import SpinnerAnim from '../Components/shared/SpinnerAnim'

const ProductDetails = () => {
  const [modifiedCocktails ,setModifiedCocktails] = useState([]);
  
  const { loading, cocktail } = useSelector((state) => ({
    ...state.app,
  }));
  
  const dispatch = useDispatch();
  
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(fetchsinglecoctails({ id }));
  }, [dispatch, id ]);
    
  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strGlass: glass,
        strDrinkThumb: img,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = [name, category, info, glass, img,ingredients];
      setModifiedCocktails(newCocktail);
    } else {
      setModifiedCocktails(null);
    }
  }, [id, cocktail]);

  if(!modifiedCocktails){
    return <h2>No cocktail details </h2>  
  }else{
    const {name,img,info,category,ingredients,glass} = modifiedCocktails
    return (
      <>
      {loading ? (<SpinnerAnim/>) : (
            <Layout>
              <div className="container mt-4">
                <Link to="/" className="btn btn-info">GO Back </Link>
                <div className="row mt-4">
                  <div className="col-md5">
                    <img src={img} alt={name} height={300} width={400} />
                  </div>
                    <div className="col-md-5">
                      <h2> Name : {name}</h2>
                      <p>category : {category}</p>
                      <p> info : {info}</p>
                      <p> Glass : {glass}</p>
                      <p> ingredients : {ingredients + " ,"}</p>
                    </div>
                </div>
              </div>
            </Layout>
      )}
      </>
    );
  }
};

export default ProductDetails;
