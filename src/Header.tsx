import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Where', to: '/' },
  { label: 'What', to: '/what' },
  { label: 'Wear', to: '/' },
  { label: 'Who', to: '/' },
];

export default function Header() {
  return (
    <header className="w-full bg-[#6C584D] flex items-center justify-between px-4 py-2 border-t-2 border-[#FFFFEF]">
      {/* Logo */}
      <div className="h-[56px] w-[180px] flex items-center pl-6">
        <img src={logo} alt="pure coffee" className="h-[48px] ml-2 hover:cursor-pointer scale-140 " />
      </div>
      {/* Nav */}
      <nav className="flex gap-4 flex-1 justify-center mr-36 py-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="font-bold text-[40px] font-DinaChaumont text-[#FFFFEF] border-2 border-[#FFFFEF] px-8 py-0 bg-transparent hover:bg-[#7e6a5c] hover:cursor-pointer transition rounded-none shadow-none focus:outline-none"
            style={{ boxShadow: '0 0 0 2px #FFFFEF, 2px 2px 0 0 #6C584D', textDecoration: 'none' }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* Icons */}
      <div className="flex items-center gap-6 mr-4">
        {/* Loupe */}
        <svg width="43" height="59" viewBox="0 0 43 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.5559 55.2142L33.6479 40.6608C32.9642 38.6204 31.6212 37.465 30.0829 37.0717C37.799 33.6792 43 26.4025 43 17.9458C42.9756 8.35833 35.3816 0 23.3191 0C11.2567 0 0 9.41541 0 21.4612C0 31.3683 7.91141 39.2104 19.5588 39.2104C21.3901 39.2104 23.1238 39.0137 24.8575 38.7187C24.1738 39.5792 23.9052 40.6608 23.9052 41.8162C23.9052 42.4062 24.0028 42.9717 24.1982 43.5617L28.8132 58.115C29.8631 58.6067 31.1329 59 32.4759 59C34.9909 59 37.5792 57.5496 38.5559 55.2142ZM2.78365 21.2646C2.78365 10.6692 12.3311 2.63042 23.1238 2.63042C33.9165 2.63042 40.1919 9.80875 40.1919 18.1671C40.1919 29.0329 29.9852 36.6046 19.7541 36.6046C9.523 36.6046 2.78365 29.795 2.78365 21.2646Z" fill="#FFFFEF"/>
        </svg>
        {/* Tasse */}
        <svg width="56" height="51" viewBox="0 0 56 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6889 50.9793C1.14074 44.4461 0 20.9683 0 11.1789V0H48.4711C53.9881 0 56 2.38512 56 8.79382V19.8483C56 26.257 53.9881 28.6421 48.4711 28.6421H46.3348C44.6963 37.8093 41.3156 47.1009 34.0356 51H13.6889V50.9793ZM3.2563 10.0382H44.4474V3.00732H3.2563V10.0382ZM48.4711 25.6141C52.1215 25.6141 52.9926 24.743 52.9926 19.8276V8.77308C52.9926 3.87841 52.1215 2.98658 48.4711 2.98658H47.7244V11.9048C47.7244 15.4099 47.4756 20.4498 46.8533 25.5933H48.4918L48.4711 25.6141Z" fill="#FFFFEF"/>
        </svg>
      </div>
    </header>
  );
} 