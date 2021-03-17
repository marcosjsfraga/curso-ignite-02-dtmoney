import { Container } from './styles'

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Depósito</td>
                        <td className="credit">234,56</td>
                        <td>Diversos</td>
                        <td>10/03/2021</td>
                    </tr>
                    <tr>
                        <td>Despesas diária</td>
                        <td className="debit">-234,56</td>
                        <td>Diversos</td>
                        <td>10/03/2021</td>
                    </tr>
                    <tr>
                        <td>Despesas diária</td>
                        <td>234,56</td>
                        <td>Diversos</td>
                        <td>10/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
