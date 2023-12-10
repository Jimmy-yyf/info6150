import './Cards.css'
function Card({
    className, onReadMore,
    title, pic,
    alt, text,
    }) {
    return (
    <div className={`card__area ${className}`}>
      <h3 className={`card__title ${className}__title`}>{title}</h3>
    <img className={`card__pic ${className}__pic`}
    alt={alt}
    src={pic}
    />
    <p className={`card__text ${className}__text`}>{text}</p>
    <a className={`card__link ${className}__link`}
    href="" onClick={onReadMore}
    aria-label={`Read More about ${title}`}
    >
    Read More
    </a>
    </div>
    )
    }
    export default  Card;