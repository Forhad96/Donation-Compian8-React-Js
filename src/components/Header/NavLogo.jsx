// import logo from '../assets/logo.png'

const NavLogo = () => {
    return (
        <div className="flex items-center justify-center gap-5">
            <div>
                <img className="" src="logo.png" alt="" />

            </div>
            <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-color">Donation</h3>
                <h4 className="font-medium text-xl tracking-[10px] text-gray-500">Campaign</h4>
            </div>
        </div>
    );
};

export default NavLogo;