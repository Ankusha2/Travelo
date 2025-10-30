import React, { useEffect ,useState} from 'react';
import './../styles/Navbar.css';
import { navData as rawNavData} from '../data';
import ListItem from './ListItem';
import ListIcon from './ListIcon';
import Section1 from './Section1';
import ShimmerUI from '../ShimmerUI';

function Navbar() {
    // console.log(navData)

     const [navData, setNavData] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(()=>{
        setTimeout(() => {
            setNavData(rawNavData);
            setLoading(false);
        }, 800);
     },[])

     if(loading){
        return   <ShimmerUI/>
    }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white p-0">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={navData.brand.logo} alt={navData.brand.alt} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >

                {/* {navData.navLinks.map((elem,idx)=>{
                    return(<li key={idx} className="nav-item">
                <a className="nav-link active" aria-current="page" href={elem.url}>{elem.name}</a>
                </li> )
                })} */}
                
                
                {navData.navLinks.map((elem, index) => <ListItem elem={elem} key={index}/>)}

            </ul>
            <div id="navbarSupportedContent2">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><i className={navData.contact.icon} style={{color: 'red'}}></i> {navData.contact.text} </li>
                    {/* {navData.socialIcons.map((elem,idx)=>{
                        return(
                            <li key={idx} className="nav-item logo"><a href={elem.url}> <i className={elem.icon}></i></a></li>                    
                        )
                    })} */}
                    {navData.socialIcons.map((elem,idx)=>
                        <ListIcon elem={elem} key={idx}/>
                    )}

                    <li className="nav-item logo"><a href={navData.search.action} > <i className={navData.search.icon}></i></a></li>
                </ul>
            </div>
            </div>
        </div>
     </nav>
     <Section1/>
    </>
  );
}

export default Navbar;
