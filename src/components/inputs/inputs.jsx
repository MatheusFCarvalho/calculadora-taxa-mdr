import { makeRequest } from '../../utils/axios';
import { Container } from './styles';


function Inputs({ setResults }) {

    const handleSubmit = async (event) => {
        let amount = document.querySelector('.amountInput').value
        let installments = document.querySelector('.installmentsInput').value
        let mdr = document.querySelector('.mdrInput').value

        if (installments > 12) {
            document.querySelector('.installmentsInput').value = 12
            installments = 12
        }

        if (amount >= 10 && installments > 0 && mdr) {
            amount = amount * 100
            setResults(await makeRequest(amount, installments, mdr))
        }
    }

    return (
        <Container onChange={handleSubmit}>
            <h1>Simule sua Antecipação</h1>
            <div>
                <p>Informe o valor da venda *</p>
                <div className='input-money'>
                    <p>R$</p>
                    <input className='amountInput' type='number' />
                </div>
            </div>
            <div>
                <p>Em quantas parcelas *</p>
                <input className='installmentsInput' type='number' max={12} min={0} />
                <span>Máxima de 12 parcelas</span>
            </div>
            <div>
                <p>Informe o percentual de MDR *</p>
                <input className='mdrInput' type='number' />
            </div>
        </Container>
    )
}
export default Inputs