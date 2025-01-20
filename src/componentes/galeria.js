import React from "react";
function Galeria({ img }) {
    return (
        <div>
            {img.map((image, index) => (
                <img key={index} src={image} style={{ border: "2px solid black", borderRadius: "5px", margin: "5px"}} />
            ))}
        </div>
    );
}
export default Galeria;
