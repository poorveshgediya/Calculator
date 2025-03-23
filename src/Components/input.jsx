import style from './input.module.css'
function Input ({value}){
    return (
        <div>
        <input type="text" className={style.input} value={value} />
        </div>
    )
}

export default Input;