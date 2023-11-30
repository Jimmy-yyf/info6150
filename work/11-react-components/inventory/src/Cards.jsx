import Button from "./Button"
import './Cards.css'
function Card({
    className, onReadMore,
    title, pic,
    alt, text, linkText,
    }) {
    return (
    <div className={`card-area ${className}`}>
    <h3 className={`main-title ${className}__title`}>{title}</h3>
    <img className={`card-pic ${className}__pic`}
    alt={alt}
    src={pic}
    />
    <p className={`card-text ${className}__text`}>{text}</p>
    <Button className={`card-link ${className}__link`}
    onClick={onReadMore}
    aria-label={`Read More about ${title}`}
    >
    Read More
    </Button>
    </div>
    )
    }
    export default  Card;