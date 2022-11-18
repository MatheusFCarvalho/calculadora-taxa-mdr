import { Container } from './styles';


function Results({ results }) {
    const centsValues = Object.values(results)
    const daysArray = ['Amanhã:', 'Em 15 dias:', 'Em 30 dias:', 'Em 90 dias:']

    const format = (number) => 'R$' + (number / 100).toFixed(2)

    return (
        <Container>
            <div>
                <h2>VOCÊ RECEBERÁ:</h2>
                <div className='sublinhado' />
            </div>
            {daysArray.map((day, i) => <p>{day} <b>{format(centsValues[i])}</b></p>)}
        </Container>
    )
}

export default Results;
