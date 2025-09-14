import { createContext, useContext } from 'react';
import emailjs from 'emailjs-com';

export const SendMailContext = createContext();

export const SendMailProvider = ({ children })  => {
    const sendMail = (formRef) => {
        try {
            emailjs.sendForm(
                "service_4mkbuqg",
                "template_tu9deuw",
                formRef,
                "HQEfvRZEyWEEZBCzg"
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