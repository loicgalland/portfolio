export default function Contact(){
    return(
        <div className="section__contact">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__email">
                N’hésitez pas à m’envoyer un mail, je serais ravis d’échanger avec vous à propos de vos besoins !
            </p>
            <a href="mailto: loicgalland1@gmail.com" className="link__text">loicgalland1@gmail.com</a>
            <p className="contact__phone">Si vous vous sentez plus à l’aise à l’oral,
                vous pouvez me contacter au <br/>
                <strong className="phone__number">06 35 43 49 05</strong></p>
        </div>
    )
}