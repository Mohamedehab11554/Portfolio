import React from "react";
import { MdContactMail } from 'react-icons/md';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate} from "react-simple-animate";
import './styles.scss';

const Contact=()=>{
return(
    <section id="contact" className="contact">
    <PageHeaderContent
        headerText="My Contact"
        icon={<MdContactMail size={40} />}
    />
    <div className="contact__content">
        <Animate
        play
        duration={1}
        delay={0}
        start={{
            transform: "translateX(-200px)"
        }}
        end={{
            transform: "translateX(0px)"
        }}
        >
            <h3 className="contact__content__header-text">
                Let's Talk
            </h3>

        </Animate>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
            transform: "translateX(200px)"
        }}
        end={{
            transform: "translateX(0px)"
        }}
        ></Animate>
         <div className="contact__content__form">
           <div className="contact__content__form__controlswrapper">
           <div>
            <input required name="name" className="inputName" type={'text'}/>
            <label htmlFor="name" className="nameLabel">Name</label>
           </div>
           <div>
           <input required name="email" className="inputEmail" type={'text'}/>
            <label htmlFor="email" className="emailLabel">Email</label>
           </div>
           <div>
           <textarea rows="5" required name="description" className="inputDescription" type={'text'}/>
            <label htmlFor="description" className="descriptionLabel">Description</label>
           </div>
         </div>
         <button>Supmit</button>
         </div>
    </div>
</section>
)
}
export default Contact;