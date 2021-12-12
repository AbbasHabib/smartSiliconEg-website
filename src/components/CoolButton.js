import './styles/CoolButton.css';

const CoolButton = ({ text }) => {
    return (
        <div className="cool-button">

            <button type="button" className="fill">{text}</button>
        </div>
    )
}



export default CoolButton

