import { useState, useRef } from "react";
import './productcreate.css';
import { Link } from "react-router-dom";

export function CreateProduct() {
    const Name = useRef();
    const Size = useRef();
    const Price = useRef();
    const Total =useRef();

    const [saveBtnText, setSaveBtnText] = useState("save");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            Name: Name.current.value,
            Size: Size.current.value,
            Price: Price.current.value,
            Total: Total.current.value,
        };

        try {
            const response = await fetch("http://localhost:4003/saveproduct", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Data saved successfully!");
              
                Name.current.value = "";
                Size.current.value = "";
                Price.current.value = "";
                Total.current.value="";

               
            } else {
                console.error("Failed to save data.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginLeft: '200px', height: '100vh', backgroundColor: ' #e9e9e9 ',marginTop:'70px' }}>
            <div style={{ padding: '15px' }}>
                <div className="lack" style={{ display: 'flex' }}>
                    <div>
                        <Link to='/back'><button className="bg-primary ">Back</button></Link>
                    </div>
                    <div style={{ margin: 'auto' }}><h3>CREATE</h3></div>
                    <div style={{ display: 'flex', marginLeft: 'auto', marginRight: '30px', color: 'orange', fontSize: '25px' }}>
                        <div style={{ padding: '8px' }}>
                            <i className="fas fa-home"></i>
                        </div>
                        <div style={{ padding: '8px' }}>
                            menu
                        </div>
                    </div>
                </div>
            </div>

            <div className="topedit" style={{ margin: 'auto', padding: '15px', width: '70%', border: '1px solid black', backgroundColor: 'white' }}>
                <div className="top2">
                    <div className="form-group bod">
                        <input type="text" className="form-control edit" placeholder="Name" name="Name" ref={Name} />
                    </div>
                    <div className="form-group bod " style={{ marginLeft: 'auto' }}>
                        <input type="text" className="form-control edit" placeholder="Size" name="Size" ref={Size} />
                    </div>
                </div>
                <div className="top2">
                <div className="form-group bod">
                    <input type="text" className="form-control edit" placeholder="Price" name="Price" ref={Price} />
                </div>
                <div className="form-group bod" style={{ marginLeft: 'auto' }}>
                    <input type="text" className="form-control edit"  placeholder="Total" name="Total" ref={Total} />
                </div>
                </div>
                <div className="m-2">
                    <input type="submit" value={saveBtnText} className="btn btn-success" />
                </div>
            </div>
        </form>
    );
}
