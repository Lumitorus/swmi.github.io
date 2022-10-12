import React from 'react';
import './Contacts.scss';
import {motion} from "framer-motion";
export default function Contacts() {
    const visible = {x: 0,  width: "100%", opacity: 1, y: 0, transition: { duration: 0.9 } };
    return (
        <motion.div
        className='contacts'
        initial={{opacity: 0,x: "200%", y: "200%", width: "100%", transition: { duration: 0.5 }}}
        animate={visible}
        exit={{ opacity: 0,x: "200%", y: "200%",  width: 0, transition: { duration: 0.5 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
            <label>EMAIL: damirka2404@mail.ru</label>
            <label>TELEPHONE: +887451235444</label>
        </motion.div>        
    )
}