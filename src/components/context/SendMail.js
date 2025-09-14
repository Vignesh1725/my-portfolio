import { createContext, useContext } from 'react';
import emailjs from 'emailjs-com';

export const SendMailContext = createContext();

export const SendMailProvider = ({ children })  => {
    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const sendMail = (formRef) => {
        try {
            emailjs.sendForm(
                service_id,
                template_id,
                formRef,
                public_key
            );
            alert("Message sent successfully!");
        }
        catch {
            alert("Failed to sent message!");
        }
    }

    return (
        <SendMailContext.Provider value={{ sendMail }}>
            {children}
        </SendMailContext.Provider>
    );
}

export const useSendMail = () => useContext(SendMailContext);