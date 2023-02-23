import StarRatings from 'react-star-ratings'

function StarsRating({vote_average}) {

    return (
        <div className="App">
            <div className="Wrapper">
                <StarRatings
                    rating={vote_average}
                    starRatedColor="#FFD700"
                    starEmtyColor="#999999"
                    starHoverColor="#FFD700"
                    starSpacing="3px"
                    starDimension="13px"
                    numberOfStars={10}
                    changeRating={null}
                    name={'rating'}
                />
            </div>
        </div>
    );
}

export {StarsRating};