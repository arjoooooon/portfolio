import React from "react"
import { navigate } from "gatsby"
import axios from "axios"
import validator from "email-validator"
import pic1 from "../../assets/images/about.jpg"

const LoadingSubmit = () => (
  <div className="contact-loading">
    <span className="contact-loading-inner" />
  </div>
)
const SectionContact = ({
  isValid,
  onChange,
  onSubmit,
  showEmailError,
  loading,
  state,
}) => {
  return (
    <section
      className="arja-section contact-section arja-no-pb"
      id="contact-section"
    >
      {loading && <LoadingSubmit />}
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div
            data-aos="fade-up"
            className="col-md-7 heading-section text-center"
          >
            <span className="subheading">Contact</span>
            <h2 className="mb-4">Contact Me</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form
              className="bg-light p-4 p-md-5 contact-form"
              onSubmit={onSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="FullName"
                  className="form-control"
                  placeholder="Your Name"
                  value={state.FullName}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
              </div>
              <div
                className={`${
                  showEmailError !== "" && showEmailError === false
                    ? "form-group error"
                    : "form-group"
                }`}
              >
                <input
                  type="text"
                  name="Email"
                  className="form-control"
                  placeholder="Your Email"
                  value={state.Email}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="Subject"
                  className="form-control"
                  placeholder="Subject"
                  value={state.Subject}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="Message"
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                  value={state.Message}
                  onChange={onChange.bind(this)}
                  onBlur={onChange.bind(this)}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                  disabled={!isValid}
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <div className="img">
              <img src={pic1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

class ContactSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FullName: "",
      Email: "",
      Subject: "",
      Message: "",
      isValid: false,
      emailInvalid: "",
      submitted: false,
      loading: false,
    }
    this.onUpdateValues = this.onUpdateValues.bind(this)
  }
  validateEmail = () => {
    if (this.state.Email !== "") {
      this.setState({
        isValid: validator.validate(this.state.Email),
        emailInvalid: validator.validate(this.state.Email),
      })
    } else {
      this.setState({ isValid: false, emailInvalid: false })
    }
  }
  hasNull(target) {
    for (var val in target) {
      if (target[val] === "" || target[val] === undefined) return true
    }
    return false
  }
  checkDataNull(arr) {
    this.setState({ isValid: !this.hasNull(arr) })
  }
  onUpdateValues = e => {
    this.setState({ [e.target.name]: e.target.value })
    e.target.className =
      e.target.value != "" ? `form-control has-value` : "form-control"
    this.validateEmail()
    this.checkDataNull({ ...this.state })
    console.info("data:", { ...this.state })
  }
  handleSubmit = async e => {
    e.preventDefault()
    const data = { ...this.state }
    if (data.Email && data.FullName && data.Subject) {
      this.setState({ loading: true })
      axios({
        url: `https://script.google.com/macros/s/AKfycbzcXzXV0eVbR3piTHyA0iz7ZmxAyD5ceJEEg2wVutUjNOahJwA/exec`,
        data: JSON.stringify(data),
        headers: { "content-type": "application/x-www-form-urlencoded" },
        method: "POST",
      }).then(res => {
        if (res.data.result) {
          this.setState({ submitted: true })
          this.setState({ loading: false })
        }
      })
    } else {
      this.checkDataNull(data)
    }
  }
  resetForm() {
    document.getElementById("contact-form").reset()
  }

  render() {
    const { isValid, submitted } = this.state

    return (
      <>
        {submitted ? (
          navigate("/thanks")
        ) : (
          <SectionContact
            onChange={this.onUpdateValues.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            isValid={isValid}
            loading={this.state.loading}
            showEmailError={this.state.emailInvalid}
            state={this.state}
          />
        )}
      </>
    )
  }
}
export default ContactSection
