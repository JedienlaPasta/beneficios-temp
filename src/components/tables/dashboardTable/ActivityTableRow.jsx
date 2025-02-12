import PropTypes from 'prop-types';
import CustomColumn from './CustomColumn';

export default function ActivityTableRow({ item }) {
    const { nombre, transaccion, fecha} = item

    return (
        <tr className='grid grid-cols-12 text-sm'>
            <CustomColumn col_span={'col-span-3'}>{nombre}</CustomColumn>
            <CustomColumn col_span={'col-span-6'}>{transaccion}</CustomColumn>
            <CustomColumn col_span={'col-span-3'}>{fecha}</CustomColumn>
        </tr>
    )
}

ActivityTableRow.propTypes = {
    item: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        transaccion: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
    }).isRequired,
}