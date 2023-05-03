import React, { useState } from 'react';
import '../App.css';

export interface RecipeProps {
  title: string;
  chefName: string;
  servingSize: number;
  ingredients: string[];
  directions: string[];
  comments: string[];
}

export const Recipe: React.FC<RecipeProps> = ({
  title,
  chefName,
  servingSize,
  ingredients,
  directions,
  comments,
}) => {
  
  const [commentList, setCommentList] = useState(comments);
  const [inputComment, setInputComment] = useState('');

  return (
    <div>
      <h1>{title}</h1>
      <p className='recipe-text'>Chef: {chefName}</p>
      <p className='recipe-text'>Serving Size: {servingSize}</p>
      <h2>Ingredients</h2>
      <ul className='recipe-text'>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h2>Directions</h2>
      <ol className='recipe-text'>
        {directions.map((direction) => (
          <li key={direction}>{direction}</li>
        ))}
      </ol>
      <hr />
      <h2 >Comments</h2>
      <ul className='recipe-text'>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
      <div style= {{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <textarea placeholder='have an experience with this recipe? Leav a comment!' cols={30} rows={4}></textarea>
        <button>post</button>
      </div>
    </div>
  );
};
