import heroDesktop from "./Assets/images/hero-desktop.jpg"
import Logo from "./Assets/images/logo.svg"
import arrow from "./Assets/images/icon-arrow.svg"

function App() {
  return (
    <div className="h-screen bg-white flex flex-row items-center justify-between overflow-hidden">
      <div className="w-[60%] h-[100%] bg-[url('./Assets/images/bg-pattern-desktop.svg')] flex items-center justify-center bg-no-repeat bg-cover">
        <div className="w-[50%] h-[75%] flex flex-col items-center">
          {/* Header */}
          <div className="w-[100%] h-[200px]">
            <img src={Logo}/>
          </div>
          
          {/* Content */}
          <div className="w-[100%] h-[750px]">
          <div className="w-[100%] h-[45%]">
          <h1 className="text-7xl tracking-[20px] font-[300] text-[#ce9797]">WE'RE</h1>
          <h1 className="text-7xl tracking-[20px] font-[600] text-[#413a3a]">COMING</h1>
          <h1 className="text-7xl tracking-[20px] font-[600] text-[#413a3a]">SOON</h1>
          </div>
          <p className="font-[400] text-[#ce9797] text-xl">Hello hellow shoppers! We're currently building our new fashion store. Add you email below to stay up-to-date with announcements and our launch deals.</p>
          <div className="w-[100%] mt-5 h-[100px] flex relative flex-row items-center justify-center">
            <input type="email" className="pl-5 border-[1px] outline-none border-[#ce9797] w-[100%] text-[#ce9797] placeholder-[#ce9797] h-[60px] rounded-full" placeholder="Email Adress"/>
            <img src={arrow} className="fill-white absolute right-[-25px] rounded-full pt-5 pb-5 pr-10 pl-10 bg-gradient-to-r from-[#f8bfbf] to-[#ee8c8c] cursor-pointer"/>
          </div>
          </div>
        </div>
      </div>
      <img src={heroDesktop} className="h-[100%] w-[40%]"/>
    </div>
  );
}

export default App;
