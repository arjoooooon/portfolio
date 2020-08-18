import React from "react"
import validator from "email-validator"
import pic1 from "../../assets/images/about.jpg"

class SectionContact extends React.Component {
    render() {
        const showEmailError =
            this.props.state.Email !== "" && !this.props.emailIsValid
        return (
            <section className="arja-section contact-section arja-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div data-aos='fade-up' className="col-md-7 heading-section text-center">
                            <span className="subheading">Contact</span>
                            <h2 className="mb-4">Contact Me</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="row no-gutters block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <form className="bg-light p-4 p-md-5 contact-form" onChange={this.props.onChange}
                                onSubmit={this.props.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" disabled={!this.props.emailIsValid} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="img"><img src={pic1} alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class ContactSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FullName: "",
            Email: "",
            ContactNumber: "",
            Message: "",
            emailIsValid: "",
            submitted: false,
        }
    }
    validateEmail = () => {
        if (this.state.Email !== "") {
            this.setState({ emailIsValid: validator.validate(this.state.Email) })
        } else {
            this.setState({ emailIsValid: "" })
        }
    }

    updateValues = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
        e.target.className =
            e.target.value !== "" ? `form-control has-value` : "form-control"
        this.validateEmail()
    }
    handleSubmit = async e => {
        e.preventDefault()
        try {
            const response = await fetch("http://173.255.241.75:1337/email", {
                method: "POST",
                body: JSON.stringify(this.state),
            })
            console.log(response)
            if (!response.ok) {
                this.setState({ submitted: true })
                console.log("response", response)
                return
            }

            console.log("success email")
        } catch (e) {
            console.log("error")
        }
    }
    resetForm() {
        document.getElementById("contact-form").reset()
    }

    render() {
        const { emailIsValid, submitted } = this.state

        return (
            <>
                {submitted ? (
                    <div>submit</div>
                ) : (
                        <SectionContact
                            onChange={this.updateValues}
                            onSubmit={this.handleSubmit}
                            emailIsValid={emailIsValid}
                            state={this.state}
                        />
                    )}
            </>
        )
    }
}
export default ContactSection
