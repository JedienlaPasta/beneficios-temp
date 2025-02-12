// import ActiveCampaigns from "../components/dashboard/ActiveCampaigns";
import { RiDashboardFill } from "react-icons/ri";
import GeneralInfo from "../components/dashboard/GeneralInfo";
import ActivityTable from "../components/tables/dashboardTable/activityTable";

export default function DashboardLayout() {
    return (
        <div className="flex flex-col gap-1 p-5 w- bg-gray-600/20s">
            {/* <h3 className='font-medium text-slate-900/90'>Campañas Activas</h3>
            <section className="flex gap-5">
                <ActiveCampaigns nombre={'Balón de Gas'} fecha={'12 FEB 2025'} entregado={70} />
                <ActiveCampaigns nombre={'Balón de Gas'} fecha={'12 FEB 2025'} entregado={70} />
                <ActiveCampaigns nombre={'Balón de Gas'} fecha={'12 FEB 2025'} entregado={70} />
            </section> */}
            {/* Title */}
            <section className="flex items-center gap-2">
                <RiDashboardFill className="text-3xl rounded-md text-slate-900/90" />
                <span>
                    <h2 className='text-xl font-bold text-slate-900'>Menú Principal</h2>
                    <p className='text-xs text-slate-900/60'>Bienvenido de vuelta, aquí podras encontrar información general</p>
                </span>
            </section>
            {/* Cards */}
            <section className="flex gap-5 py-4 mt-2 overflow-x-auto">
                <GeneralInfo titulo={'Campañas Activas'} dato={5} />
                <GeneralInfo titulo={'Beneficios Entregados'} dato={374} />
                <GeneralInfo titulo={'Total Beneficiarios'} dato={78} />
            </section>
            {/* Activity Table */}
            <section className='mt-5 overflow-x-auto'>
                <h3 className='font-bold text-slate-900/90'>Actividad Reciente</h3>
                <ActivityTable />
            </section>
            {/* <button className='flex px-8 py-2 text-white rounded-md bg-sky-600 w-fit'>Guardar</button>
            <input type="text" placeholder='Buscar' className='px-3 py-1 bg-white border rounded-md w-60 text-black/70 border-slate-900/15' /> */}
        </div>
    )
}