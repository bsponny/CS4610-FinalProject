import React, { useEffect, useState } from 'react';
import '../App.css';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, updateDoc, arrayUnion, arrayRemove, collection, getDoc, query, where, getDocs } from "firebase/firestore";


export interface Comment {
  id: number,
  comment: string,
  userId: string
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
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const loggedIn = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return loggedIn;
  }, [auth]);

  useEffect(() => {
    if(recipe.comments != undefined) {
      setCommentList(recipe.comments);
    }
  }, [recipe]);

  const postComment = async () => {
    if(!user) {
      console.log("Tried posting a comment, but user not defined!")
    } else {
      const _id = recipe.comments.length;
      
      let newComment: Comment = {
        id: _id,
        comment: inputComment,
        userId: user.uid
      };
      const q = query(collection(db, "recipes"), where("recipeName", "==", recipe.recipeName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((docu) => {
        const newDocRef = doc(db, "recipes", docu.id);
        updateDoc(newDocRef, {
          comments: arrayUnion(newComment)
        });
        let newComments = docu.data().comments;
        newComments.push(newComment);
        setCommentList(newComments);
      });
      setInputComment("");
  }
  };

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
          {commentList.map((comments) => (
            <li key={comments.id}>{comments.comment}</li>
          ))}
        </ul>
        <div style= {{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <textarea placeholder='Have an experience with this recipe? Leave a comment!' cols={30} rows={4} value = {inputComment} onChange={e => setInputComment(e.target.value)}></textarea>
          <button onClick={postComment}>post</button>
        </div>
      </div>
    );
  }
};
