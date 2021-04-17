const Spots = ({left, top, img}) => {
    return (
        <div style={{position:"absolute", top:top, left:left, opacity:'0.5'}}>
            <img 
                src={process.env.PUBLIC_URL + 'images/' + img}
            />
        </div>
    );
};

export default Spots;