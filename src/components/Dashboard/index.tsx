import { Heading, Text } from "coheza-ui";

export function Dashboard() {
  return (
    <div>
      <Heading>Dashboard</Heading>

      <div className="mt-5 gap-5 flex flex-col">
        <Text>Meus Bolões</Text>
        <div className="bg-default-900">
          <Text size="sm" className="p-2">Bolão da Ti</Text>
          <table className="w-full">
            <tr className="text-default-100 bg-default-900 text-left">
              <th className="p-2">Posição</th>
              <th className="p-2">Nome</th>
              <th className="p-2">Quantidade de Pontos</th>
            </tr>
            <tr className="bg-default-700 text-default-100">
              <td className="p-2">1º</td>
              <td className="p-2">Carlos Zanchet</td>
              <td className="p-2">10 pts</td>
            </tr>
            <tr className="bg-default-700 text-default-100">
              <td className="p-2">2º</td>
              <td className="p-2">Carlos Zanchet</td>
              <td className="p-2">10 pts</td>
            </tr>
            <tr className="bg-default-700 text-default-100">
              <td className="p-2">3º</td>
              <td className="p-2">Carlos Zanchet</td>
              <td className="p-2">10 pts</td>
            </tr>
            <tr className="bg-default-700 text-default-100">
              <td className="p-2">4º</td>
              <td className="p-2">Carlos Zanchet</td>
              <td className="p-2">10 pts</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
