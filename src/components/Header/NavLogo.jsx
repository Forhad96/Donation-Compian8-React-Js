// import logo from '../assets/logo.png'

const NavLogo = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <div>
                <img className="rounded" src="logo.png" alt="" />
            </div>
            <div>
                <h3 className="text-4xl font-bold text-primary-color">Donation</h3>
                <h4 className="font-medium text-xl tracking-[11px] text-gray-500">Campaign</h4>
            </div>
        </div>
    );
};

export default NavLogo;