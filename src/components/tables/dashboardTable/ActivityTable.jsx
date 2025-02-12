import ActivityTableRow from "./activityTableRow"

const fakeData = [
    {
        nombre: 'Kristina Meyers',
        transaccion: 'Entrega Tarjeta Comida 421-25-TA a 83294512',
        fecha: '12 Febrero 2025',
    },
    {
        nombre: 'Kristina Meyers',
        transaccion: 'Entrega Tarjeta Comida 421-25-TA a 83294512',
        fecha: '12 Diciembre 2025',
    },
    {
        nombre: 'Kristina Meyers',
        transaccion: 'Entrega Tarjeta Comida 421-25-TA a 83294512',
        fecha: '12 FEB 2025',
    },
    {
        nombre: 'Kristina Meyers',
        transaccion: 'Entrega Tarjeta Comida 421-25-TA a 83294512',
        fecha: '12 FEB 2025',
    },
    {
        nombre: 'Kristina Meyers',
        transaccion: 'Entrega Tarjeta Comida 421-25-TA a 83294512',
        fecha: '12 FEB 2025',
    },
]

export default function activityTable() {

    const displayTableRow = fakeData.map((item, index) => <ActivityTableRow key={index} item={item} />)

    return (
        <div className="overflow-x-auto border rounded-md border-slate-900/30">
            <table className="overflow-hidden text-slate-900/90 w-[44rem]">
                <thead>
                    <tr className="grid grid-cols-12 text-sm text-left">
                        <th className="col-span-3 px-3 py-2 font-medium">Encargado</th>
                        <th className="col-span-6 px-3 py-2 font-medium">Transacción</th>
                        <th className="col-span-3 px-3 py-2 font-medium">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {displayTableRow}
                </tbody>
            </table>
        </div>
    )
}
