import style from './buttons.module.css'
function Button({data, onClick}){
    return (
    <button className={style.buttons} onClick={onClick}>
        {data}
    </button>
    )
}
export default Button