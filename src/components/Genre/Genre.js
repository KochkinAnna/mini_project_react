import css from './Genre.module.css'

const Genre = ({genre}) => {

    const {name} = genre;

    return (
        <div className={css.Genre}>
            <button className={css.butt}>{name}</button>

        </div>
    );
};

export {Genre};