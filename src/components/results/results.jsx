import { Container } from './styles';


function Results({ results }) {
    const centsValues = Object.values(results)
    const daysArray = ['Amanhã:', 'Em 15 dias:', 'Em 30 dias:', 'Em 90 dias:']

    const format = (number) => (number / 100).toFixed(2)

    // let dayOne = resultArray[0] / 100
    // let weekTwo = resultArray[1] / 100
    // let oneMonth = resultArray[2] / 100
    // let threeMonths = resultArray[3] / 100


    return (
        <Container>
            <div>
                <h2>VOCÊ RECEBERÁ:</h2>
                <div className='sublinhado' />
            </div>
            {daysArray.map((day, i) => <p>{day} <b>{format(centsValues[i])}</b></p>)}
            {/* <p>Amanhã: <strong>R${dayOne.toFixed(2)}</strong> </p>
            <p>Em 15 dias: <strong>R${weekTwo.toFixed(2)}</strong> </p>
            <p>Em 30 dias: <strong>R${oneMonth.toFixed(2)}</strong> </p>
            <p>Em 90 dias: <strong>R${threeMonths.toFixed(2)}</strong> </p> */}
        </Container>
    )
}

export default Results;
