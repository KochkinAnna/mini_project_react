import css from './Video.module.css'

const Video = ({video}) => {

    const {key} = video;

    return (
        <div className={css.Video}>
            <iframe width="640" height="360" src={`https://www.youtube.com/embed/${key}`}
                    frameBorder="0">
            </iframe>
        </div>
    );
};

export {Video};