import PropTypes from 'prop-types';

export default function ActiveCampaigns({ nombre, fecha, entregado}) {
    return (
        <div className="overflow-hidden bg-white border rounded-xl w-60 text-slate-900/80 border-slate-900/15">
            <h5 className="pt-3 pb-2 text-sm font-medium border-b px-7 border-slate-900/15">{nombre}</h5>
            <span className="grid grid-cols-2 pt-2 pb-3 text-sm bg-red gap-7 px-7">
                <div>
                    <label className="text-xs">Término</label>
                    <p className='text-xs'>{fecha}</p>
                </div>
                <div>
                    <label className="text-xs">Entregas</label>
                    <p className='text-xs'>{entregado}</p>
                </div>
            </span>
        </div>
    )
}

ActiveCampaigns.propTypes = {
    nombre: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    entregado: PropTypes.number.isRequired,
}
