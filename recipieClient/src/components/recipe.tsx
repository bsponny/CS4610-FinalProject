import React, { useState } from 'react';
import '../App.css';

export interface Comment {
  id: number,
  comment: string
}

export interface RecipeProps {
  recipeName: string;
  chefName: string;
  servingSize: number;
  ingredients: string[];
  directions: string[];
  comments: Comment[];
  userId: string
}

export const Recipe: React.FC<RecipeProps> = (recipe) => {
  
  const [commentList, setCommentList] = useState(recipe.comments);
  const [inputComment, setInputComment] = useState('');

  if (recipe.recipeName === undefined){
    return(
      <div></div>
    )
  }
  else {
    return (
      <div className='recipe'>
        <h1>{recipe.recipeName}</h1>
        <p className='recipe-text'>Chef: {recipe.chefName}</p>
        <p className='recipe-text'>Serving Size: {recipe.servingSize}</p>
        <h2>Ingredients</h2>
        <ul className='recipe-text'>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <h2>Directions</h2>
        <ol className='recipe-text'>
          {recipe.directions.map((direction) => (
            <li key={direction}>{direction}</li>
          ))}
        </ol>
        <hr />
        <h2 >Comments</h2>
        <ul className='recipe-text'>
          {recipe.comments.map((comments) => (
            <li key={comments.id}>{comments.comment}</li>
          ))}
        </ul>
        <div style= {{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <textarea placeholder='Have an experience with this recipe? Leave a comment!' cols={30} rows={4}></textarea>
          <button>post</button>
        </div>
      </div>
    );
  }
};
