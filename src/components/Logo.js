import './styles/Logo.css';



const Logo = ({ text1, text2 }) => {
    return (
        <div className="logo-containter">
            <div className="outer-circle">
                <div className="inner-circle">
                    <p>{text1}</p>
                    <p style={{color:'rgba(255,255,180,1)'}}>{text2}</p>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Logo;
