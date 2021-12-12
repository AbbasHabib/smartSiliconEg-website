import './styles/CoolButton.css';

const CoolButton = ({ text }) => {
    return (
        <div className="cool-button">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet" />

            <button type="button" className="fill">{text}</button>
        </div>
    )
}



export default CoolButton

