'use client';

import Itag from './Itag';
import './sign.css';

export default function Sign() {

    const displayChange = (event: React.MouseEvent<HTMLAnchorElement>, num: number) => {
        event.preventDefault();
        const signin = document.querySelector('.signin') as HTMLElement | null;
        const signup = document.querySelector('.signup') as HTMLElement | null;

        if (num === 0) {
            if (signin) signin.style.display = 'block';
            if (signup) signup.style.display = 'none';
        }
        if (num === 1) {
            if (signin) signin.style.display = 'none';
            if (signup) signup.style.display = 'block';
        }
    };

    return (
        <>
            <div className="container">
                <div className="login-box signup">
                    <h2>SignUp</h2>
                    <form action="#">

                        <div className="input-box">
                            <input type="email" required />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <input type="password" required />
                            <label>Password</label>
                        </div>

                        <div className="input-box">
                            <input type="password" required />
                            <label>Confirm Password</label>
                        </div>

                        <button className="btn" type="submit">SignUp</button>

                        <div className="signup-link">
                            <a href='#' onClick={(e) => {
                                displayChange(e, 0);
                            }}>SignIn</a>
                        </div>
                    </form>
                </div>

                <div className="login-box signin">
                    <h2>SignIn</h2>
                    <form action="#">
                        <div className="input-box">
                            <input type="email" required />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <input type="password" required />
                            <label>Password</label>
                        </div>

                        <div className="forgot-pass">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <button className="btn" type="submit">SignIn</button>

                        <div className="signup-link">
                            <a href='#' onClick={(e) => {
                                displayChange(e, 1);
                            }}>SignUp</a>
                        </div>
                    </form>
                </div>

                <Itag index={1} />
                <Itag index={2} />
                <Itag index={3} />
                <Itag index={4} />
                <Itag index={5} />
                <Itag index={6} />
                <Itag index={7} />
                <Itag index={8} />
                <Itag index={9} />
                <Itag index={10} />
                <Itag index={11} />
                <Itag index={12} />
                <Itag index={13} />
                <Itag index={14} />
                <Itag index={15} />
                <Itag index={16} />
                <Itag index={17} />
                <Itag index={18} />
                <Itag index={19} />
                <Itag index={20} />
                <Itag index={21} />
                <Itag index={22} />
                <Itag index={23} />
                <Itag index={24} />
                <Itag index={25} />
                <Itag index={26} />
                <Itag index={27} />
                <Itag index={28} />
                <Itag index={29} />
                <Itag index={30} />
                <Itag index={31} />
                <Itag index={32} />
                <Itag index={33} />
                <Itag index={34} />
                <Itag index={35} />
                <Itag index={36} />
                <Itag index={37} />
                <Itag index={38} />
                <Itag index={39} />
                <Itag index={40} />
                <Itag index={41} />
                <Itag index={42} />
                <Itag index={43} />
                <Itag index={44} />
                <Itag index={45} />
                <Itag index={46} />
                <Itag index={47} />
                <Itag index={48} />
                <Itag index={49} />
            </div>
        </>
    );
}
