import { makeRequest } from '../../utils/axios';
import { InputNumber } from '../inputNumber/inputNumber';
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
            <InputNumber title='Informe o valor da venda *' label='amountInput' money={true} />
            <InputNumber title='Quantas parcelas *' label='installmentsInput' span='Máxima de 12 parcelas' />
            <InputNumber title='Informe o percentual de MDR *' label='mdrInput' />
        </Container>
    )
}
export default Inputs