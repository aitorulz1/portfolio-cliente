import React, { useState, useEffect } from 'react';
import clienteAxios from "../../service/axios";

import './Contact.css';
import { sendMail} from '../../helper/Mail';
 
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

export default function ToContact() {

    const [ aitor, guardarAitor ] = useState({});
    const { email } = aitor;
    
    const [ values, setValues ] = useState({
        name: '',
        mail: '',
        phone: '',
        message: '',
        status: false
    })
    const { name, mail, phone, message, status } = values;


    useEffect(() => {
        const obtenerAitor = async () => {
            try {
                const resultado = await clienteAxios.get(`/users`);
                guardarAitor(resultado.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerAitor();
    }, [aitor]);

    console.log(aitor)

    const onChange = name => e => {
        setValues({ ...values, [name]:e.target.value})
    }


    const onSubmit = e => {
        e.preventDefault();
        
                console.log('name', name)
                console.log('values email', mail)
                console.log('phone', phone)
                console.log('message', message)

        sendMail({ name, mail }).then(data=> {
            if(data.err){
                console.log('err ', data.err)
            } else {
                console.log('Success', data);
                setValues({...values, status:true})
            }
        }).catch(console.log('error in send mail'))
    };



    return (

        <div className="main-container">

            <div className="left-area">
                <Sidebar />
            </div>

            <div className="middle-area">
                <Topbar />

                <div className="middle-container">




                    <div className="contact-container">

                        <div className="map"></div>

                        <div className="contact-content-container">

                            <div className="title-container-contact">

                                <div className="title">Nice to Meet you!</div>
                                <div className="subtitle">let me know more about you and I will take care of keep in touch</div>

                            </div>

                            <div className="form-container">

                                <form onSubmit={onSubmit}>

                                    <div className="cajetin-form">
                                        <input
                                            className="line-form"
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="nombre"                                                                                  
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="cajetin-form">
                                        <input
                                            className="line-form"
                                            type="email"
                                            name="mail"
                                            id="mail"
                                            placeholder="email"                                            
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="cajetin-form">
                                        <input
                                            className="line-form"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone Number"                                            
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="cajetin-form">
                                        <input
                                            className="line-form"
                                            type="text"
                                            name="message"
                                            id="message"
                                            placeholder="message"                                            
                                            onChange={onChange}
                                        />
                                    </div>

                                    <button className="form-button-contact" type="submit" >
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    </button>

                                </form>

                            </div>



                            <div className="contact-info-container">

                                <div className="contact-info-content">

                                    <div className="contact-into-title">Contact Info</div>
                                    <div className="contact-into-subtitle">mail</div>
                                    <div className="contact-into-atr"><a href="mailto:aitorulz1@gmail.com">{email}</a></div>
                                    <div className="contact-into-subtitle">phone number</div>
                                    <div className="contact-into-atr"><a href="tel:0034647528579">+34 647 528 579</a></div>

                                </div>

                            </div>

                        </div>

                    </div>




                </div>

            </div>

            <div className="right-area">
                <Rightbar />
            </div>

        </div>

    )
}


