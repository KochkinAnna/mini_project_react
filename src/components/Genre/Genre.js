const Genre = ({genre}) => {

   const { name} = genre;

   // const dispatch = useDispatch();

    return (
        <div>
            {/*<button onClick={()=>dispatch(genresActions.getById({id}))}> {name}</button>*/}
       <div>{name}</div>
        </div>
    );
};

export {Genre};