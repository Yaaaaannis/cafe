import logo from './assets/logo.svg';

const navItems = [
  { label: 'Where' },
  { label: 'What' },
  { label: 'Wear' },
  { label: 'Who' },
];

export default function Header() {
  return (
    <header className="w-full bg-[#6C584D] flex items-center justify-between px-2 py-2">
      <div className="h-[56px] w-[180px] flex items-center ">
        <img src={logo} alt="pure coffee" className="h-[48px] ml-2 hover:cursor-pointer" />
      </div>
      <nav className="flex gap-2 mr-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="font-bold text-2xl font-DinaChaumont text-[#F0EAD2] border-2 border-[#F0EAD2] px-8 py-2 bg-[#6d5a4d] hover:bg-[#7e6a5c] hover:cursor-pointer transition rounded-none shadow-none focus:outline-none"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
} 