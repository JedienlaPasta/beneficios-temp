import PropTypes from 'prop-types';

export default function CustomColumn({ children, col_span }) {
    const style = 'px-3 py-2 text-sm ' + col_span
    return (
        <td className={style}>
            {children}
        </td>
    )
}

CustomColumn.propTypes = {
    children: PropTypes.string.isRequired,
    col_span: PropTypes.string.isRequired,
}