import React from "react";
import emailjs from "@emailjs/browser";

export const FormEmail = () => {

    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_u7yc38v', 'template_51cebmm', e.target, 'Q_h_ZoRSTV-YaacCD')
        .then((result) => {
            e.target.reset();
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


    }


    return (

        <div className='mt-5 row justify-content-center'>
            <div className="col-6 ">

                <form onSubmit={sendEmail} >
                    <h1>Contacto</h1>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Nombre:</label>
                        <input type="text" className="form-control" name="name" placeholder="Ingrese su nombre" minLength="4" maxLength="30" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Correo:</label>
                        <input type="text" className="form-control" name="email" placeholder="Ingrese su correo" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="mensaje">Mensaje:</label>
                        <textarea type="text" className="form-control" name="message" placeholder="Escriba aqui su mensaje"  minLength="4" required/>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>

        </div>
    )

}