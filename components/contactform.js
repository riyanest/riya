function ContactForm() {
    return(
        <div className="resizable" style={{backgroundColor:"var(--primary-color)"}}>
        <h3 className="contactheader" style={{margin:"20px",backgroundColor:"var(--primary-color)"}}>Let&apos;s work!</h3><br/>
        <div className="fcontent" style={{backgroundColor:"var(--primary-color)",color:"var(--font-color)"}}>
        <form className="formcontent resizable" >
            <input className="contactfield" type="text" name="name" placeholder="Name"/><br/>
            <input className="contactfield" type="text" name="email" placeholder="E-mail"/><br/>
            <input className="contactfield" type="text" name="number" placeholder="Mobile Number"/><br/>
            <button className="contactbutton" type="submit" name="emailsent">Contact-us!</button>
        </form>
        </div>
        </div>
    )
}
export default ContactForm;
