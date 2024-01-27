import "./App.css";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import spotify from "./assets/spotify.svg";
import fatma from "./fatma-islek.jpeg";
import phone from "./assets/phone.svg";
import mail from "./assets/mail.svg";
import x from "./assets/x.svg";

function App() {
 const iconClass =
  "w-12 bg-bordo border-2 border-white border-solid shadow rounded-2xl p-1 hover:bg-antrasit duration-300 hover:scale-[1.04] ";
 return (
  <div className="bg-bordo m-0 p-0 h-screen">
   <div className="w-full min-h-[85vh]  px-5  text-antrasit flex flex-col items-center justify-around ">
    <div
     className="w-[40vh] h-[50vh] bg-center bg-cover bg-no-repeat rounded-xl shadow-xl  border-[6px] border-white"
     style={{ backgroundImage: `url(${fatma})` }}
    />
    <label className="text-white font-extrabold text-[35px]">Fatma İŞLEK</label>
    <div className="flex flex-col items-start gap-4">
     <a
      className="flex items-center w-fit gap-4 cursor-pointer text-[26px] font-bold text-white bg-bordo rounded-2xl p-1 px-2 hover:bg-antrasit duration-300 hover:scale-[1.04] "
      href="tel:+90 537 959 8344"
     >
      <img src={phone} className={" w-[35px] "} />
      537 959 8344
     </a>
     <a
      className="flex items-center gap-4 cursor-pointer text-[20px] font-bold text-white bg-bordo rounded-2xl p-1 px-2 hover:bg-antrasit duration-300 hover:scale-[1.04] "
      href="mailto:fatma.islek@narfon.com.tr"
     >
      <img src={mail} className={" w-[35px] "} />
      fatma.islek@narfon.com.tr
     </a>
    </div>
    <div className=" flex gap-4">
     <a href="https://twitter.com/ftmislek" target="_blank">
      <img className={iconClass} src={x} />
     </a>
     <a href="https://instagram.com/ftmislek" target="_blank">
      <img className={iconClass} src={instagram} />
     </a>
     <a href="https://linkedin.com/in/fatmaislek/" target="_blank">
      <img className={iconClass} src={linkedin} />
     </a>
     <a
      href="https://open.spotify.com/episode/75NIgMJiiJEQMMTBkYdCsO?si=cd70ab93d69c4c63"
      target="_blank"
     >
      <img className={iconClass} src={spotify} />
     </a>
    </div>
   </div>
  </div>
 );
}

export default App;
