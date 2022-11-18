export function InputNumber({ title, label, span, money }) {
    return (
        <div>
            <p>{title}</p>
            {money && <div className='input-money'>
                <p>R$</p>
                <input className={label} type='number' />
            </div>}
            {!money && <input className={label} type='number' />}
            {span && <span>Máxima de 12 parcelas</span>}
        </div>
    )
}