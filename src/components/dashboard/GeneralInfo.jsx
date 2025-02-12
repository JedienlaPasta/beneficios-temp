import PropTypes from 'prop-types';

export default function GeneralInfo({ titulo, dato }) {
    const estiloBase = 'overflow-hidden rounded-xl w-80 shrink-0 text-white bg-slate-900/90 shadow-mds shadow-md shadow-slate-600/90'
    const estiloPersonalizado = estiloBase
    return (
        <div className={estiloPersonalizado}>
            <h5 className="pt-4 pb-1 text-xs font-medium px-7">{titulo}</h5>
            <p className='pb-3 text-2xl font-bold px-7'>{dato}</p>
        </div>
    )
}

GeneralInfo.propTypes = {
    titulo: PropTypes.string.isRequired,
    dato: PropTypes.any.isRequired,
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
}