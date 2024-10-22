import ReactStars from "react-rating-stars-component/dist/react-stars.js";
let ProductRating = (rating) => {
    return (
        <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            value={parseFloat(rating['rating'])}
            lavel={true}
        />
    );
};
export default ProductRating;