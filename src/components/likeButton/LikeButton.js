import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { addEventToLocal, removeEventFromLocal, inFavorites } from './../../localStorage/localStorage';
import { useDispatch } from 'react-redux';
import { updateFavorites } from './../../redux/actions';
import "./style.css";

const LikeButton = ({ event }) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(inFavorites(event));

    const onLikeClick = () => {
        addEventToLocal(event);
        setIsFavorite(!isFavorite);
        dispatch(updateFavorites(1));
    }

    const onDislikeClick = () => {
        removeEventFromLocal(event);
        setIsFavorite(!isFavorite);
        dispatch(updateFavorites(-1));
    }

    useEffect(()=>{
        setIsFavorite(inFavorites(event))
    }, [event])

    return (
        <button
            onClick={isFavorite ? onDislikeClick : onLikeClick}
            className="button center"
        >
            {isFavorite ?
                <FavoriteIcon 
                    fontSize="large"
                    color="secondary" 
                /> :
                <FavoriteBorderIcon 
                    fontSize="large"
                    color="secondary" 
                />
            }

        </button>
    )
}

export default LikeButton;
