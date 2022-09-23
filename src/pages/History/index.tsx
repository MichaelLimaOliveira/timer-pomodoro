import { useContext } from "react";
import { CycleContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { HistoyContainer, HistoryList, Status } from "./styles";

export function History() {
    const { cycles } = useContext(CycleContext);
    return (
        <HistoyContainer>
            <h1>Meu histórico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duraçao</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map((cycle) => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutos</td>
                                    <td>
                                        {formatDistanceToNow(
                                            new Date(cycle.startDate),
                                            {
                                                addSuffix: true,
                                                locale: ptBR,
                                            }
                                        )}
                                    </td>
                                    <td>
                                        {cycle.finishedDate && (
                                            <Status statusColor="green">
                                                Concluído
                                            </Status>
                                        )}

                                        {cycle.interruptDate && (
                                            <Status statusColor="red">
                                                Interrompiddo
                                            </Status>
                                        )}

                                        {!cycle.finishedDate &&
                                            !cycle.interruptDate && (
                                                <Status statusColor="yellow">
                                                    Em andamento
                                                </Status>
                                            )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoyContainer>
    );
}
