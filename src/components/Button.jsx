function Button({
    label,
    className,
    onClick,
    smallButton = false,
}) {
    function handleButtonClick() {
        onclick();
    }
    if (smallButton === false) {
        return (
            <button className={className} onClick={handleButtonClick}>
                {label}
            </button>
        );
    } else {
        <div className={className} onClick={handleButtonClick}>
            <span className="material-symbols-outlined">Close</span>
        </div>
    }
    
}

export default Button;