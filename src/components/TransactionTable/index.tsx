import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TrasactionTable(){
    useEffect(() => {
        api('https://localhost:3000/api/transactions')
        .then(response => console.log(response.data))
    }, [])

    return(
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
                        <td>Almoço de final de semana</td>
                        <td className="deposit">+R$1000,00</td>
                        <td>Almoço</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>
                        <td>Almoço de final de semana</td>
                        <td className="withdraw">-R$500,00</td>
                        <td>Almoço</td>
                        <td>20/06/2020</td>
                    </tr>
                    </tbody>
            </table>
        </Container>
    )
}