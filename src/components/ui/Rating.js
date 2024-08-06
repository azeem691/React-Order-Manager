const Rating = ({ rating }) => {
    const filledStars = Array(Math.round(rating)).fill('★');
    const emptyStars = Array(5 - Math.round(rating)).fill('☆');

    return (
        <div style={{ display: 'flex' }}>
            {filledStars.map((star, index) => (
                <span key={`filled-${index}`} style={{ color: 'gold', fontSize: '20px' }}>
                    {star}
                </span>
            ))}
            {emptyStars.map((star, index) => (
                <span key={`empty-${index}`} style={{ color: 'white', fontSize: '20px' }}>
                    {star}
                </span>
            ))}
        </div>
    );
};

export default Rating;
