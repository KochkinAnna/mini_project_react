const Movie = ({movie}) => {

    const {original_title, genre_ids}= movie

    return (
        <div>
            {original_title},{genre_ids}
        </div>
    );
};

export {Movie};