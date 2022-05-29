import "./__quotes.scss"
const Quotes = () => {
    return (
        <div>
            <figure className="quotes">
                <blockquote>
                    <cite>Don’t focus on having a great blog <br />
                        Focus on producing a blog that is <br />
                        great for your readers</cite>
                </blockquote>
                <figcaption><cite>-- Brian Clark</cite></figcaption>
            </figure>
            <img
                width="375px"
                height="375px"
                src={require("../../../assets/images/modal-image.png")}/>
        </div>
    )
}

export default Quotes;