import "./design/home-one.css";
import homecar from "./img/homecar.png";

function Homeone(){
    return (
        <>
        <div className="homeone d-f">
            <div className="homeone-sec sec-b">
                <h1 className="main-heading">We Design</h1>
                <h1 className="main-heading">CAD Models</h1>
                <h1 className="main-heading">and Assembalies</h1>
                {/* <br/> */}
                <p className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quasi inventore quidem aperiam illum praesentium laudantium sunt facilis doloribus ipsam rerum delectus explicabo eveniet minus, distinctio libero alias. Quas, quia?</p>
                <br/>
                <button className="primary-btn">View Models</button>
            </div>
            <div className="homeone-sec sec-b">
                <img src={homecar} className="homeCarImg" alt="" />

            </div>
        </div>
        </>

    );

}
export default Homeone;