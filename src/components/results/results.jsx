import { Container } from './styles';


function Results({ results }) {
    const resultArray = Object.values(results)
    let dayOne = resultArray[0] / 100
    let weekTwo = resultArray[1] / 100
    let oneMonth = resultArray[2] / 100
    let threeMonths = resultArray[3] / 100

    return (
        <Container>
            <div>
                <h2>VOCÊ RECEBERÁ:</h2>
                <div className='sublinhado' />
            </div>
            <p>Amanhã: <strong>R${dayOne.toFixed(2)}</strong> </p>
            <p>Em 15 dias: <strong>R${weekTwo.toFixed(2)}</strong> </p>
            <p>Em 30 dias: <strong>R${oneMonth.toFixed(2)}</strong> </p>
            <p>Em 90 dias: <strong>R${threeMonths.toFixed(2)}</strong> </p>
        </Container>
    )
}

export default Results;
