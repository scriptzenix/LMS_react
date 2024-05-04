import { Fragment} from "react";
import { Link,useHistory } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import {useState } from "react";

const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "SignUp";


let socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('https://demo-xq16.onrender.com/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data,"data responsse");

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    return (
        <Fragment>
            <Header />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div style={{marginTop:"8%"}}>
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <h6>Account Type</h6>
                            <button className="lab-btn" style={{color:"#fff",margin:"7px"}}>Student</button>
                            <button  className="lab-btn" style={{color:"#fff",margin:"7px"}}>Teacher</button>
                            <button className="lab-btn" style={{color:"#fff",margin:"8px"}}>Admin</button>
                            <form className="account-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        placeholder="User Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder="Email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        placeholder="Password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        value={formData.confirm_password}
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="lab-btn"><span>{btnText}</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                                <span className="or"><span>or</span></span>
                                <h5 className="subtitle">{socialTitle}</h5>
                                <ul className="lab-ul social-icons justify-content-center">
                                    {socialList.map((val, i) => (
                                        <li key={i}>
                                            <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default SignupPage;