
import "./design/home-two.css"
import icon from "./img/CAD-ICON.png"
function serviceCard(){
    return(
        <>
            <div className="card-container">
                <img src={icon} className="iconpng"/>
                <h2 className="card-title">CAD Design</h2>
                <p className="card-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quasi inventore quidem aperiam illum praesentium laudantium sunt facilis doloribus ipsam rerum delectus explicabo eveniet minus, distinctio libero alias. Quas, quia?
                </p>
                <br/>
                <h3 className="btn-text">learn more</h3>

                
            </div>
        </>
    )
}
export default serviceCard;