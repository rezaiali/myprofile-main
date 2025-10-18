import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import '@/app/styles/nav.css';


interface props {
  title:string;
  imgurl:string
}

export default function NavBar(props:props) {
    return (
      
         <>
      
        <nav className="navbar"  >
        <div className="prelogo ">Ali Rezai</div>
        <div className="logo">
        <img src={props.imgurl} alt="" width={`200px`} height={`200px`}
         className="img-fluid rounded-circle img-shadow"  /></div>

         
        <ul className="nav-links">
          <li><Link href="/pages/Home">Home</Link></li>
          <li><Link href="/pages/Resume">Resume</Link></li>
          <li className="dropdown">
            <a href="#" className="drop-btn">Projects</a>
               <ul className="dropdown-menu">
                 <li><Link href="./pages/Calculator">Calculator</Link></li>
                 <li><a href="#seo">Other</a></li>
                 <li><a href="#marketing">Another</a></li>
              </ul>
        </li>
          <li><Link href="/pages/Contact">Contact</Link></li>
        </ul>
       
               
        <div className="toggle-menu">
        <a href="#" className="drop-btn">&nbsp; ☰&nbsp;&nbsp;</a>
        <ul className="nav-linksMedia">
                  <li><Link href="pages/Home">Home</Link></li>
                  <li><Link href="pages/Resume">Resume</Link></li>
                  <li className="sub-menu">
                  <a className="sub-menu">Projects</a>
                      <ul className="dropdown-sm-menu">
                        <li><Link href="pages/Calculator">Calculator</Link></li>
                        <li><a href="#seo">Other</a></li>
                        <li><a href="#marketing">Another</a></li>
                      </ul>
                    </li>
                    <li><Link href="/pages/Contact">Contact</Link></li>
              </ul>
        </div>
       
         
      
      </nav>
   
      </>
    )
}