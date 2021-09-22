function ContactForm() {
    return(
        <div className="contactform" style={{backgroundColor:"#01579b",color:"var(--bg-color)"}}>
        <form className="formcontent resizable" >
            <h2 className="contactheader">Contact-Us:</h2>
            <input className="contactfield" type="text" name="name" placeholder="Name"/><br/>
            <input className="contactfield" type="text" name="email" placeholder="E-mail"/><br/>
            <input className="contactfield" type="text" name="number" placeholder="Mobile Number"/><br/>
            <button className="contactbutton" type="submit" name="emailsent">Contact-us!</button>
        </form>
        </div>
    )
}
export default ContactForm;
