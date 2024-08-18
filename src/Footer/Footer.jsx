import style from './Footer.module.css'
function footer(){
    return(
        <footer>
        <div className={style.foo}>
          <h3>Employer</h3>
          <p>
            This is a Project to manage Employe list and related data.
            with user friendly interface.
          </p>
          <address>
            <i className={style.fasolid}></i>
            Panthmudla,Ujjain(M.P.)
          </address>
          <a href="#" className={style.linkfo}>View Map &rarr;</a>
        </div>
        <div className={style.fot}>
          <div className={style.foto}>
            <h4>Our Services</h4>
            <ul>
              <li className={style.folitem}>Web Development</li>
              <li className={style.folitem}>Bussiness Websites</li>
              <li className={style.folitem}>App Development</li>
              <li className={style.folitem}>UI/UX Development</li>
              <li className={style.folitem}>SEO Marketing</li>
            </ul>
          </div>
          <div className={style.fott}>
            <h4>Explore</h4>
            <ul>
              <li className={style.folitem}>Ujjain</li>
              <li className={style.folitem}>Portfolio</li>
              <li className={style.folitem}>My Friend</li>
              <li className={style.folitem}>My Team</li>
              <li className={style.folitem}>Skills</li>
            </ul>
          </div>
        </div>
        <div className={style.fotr}>
          <h4>Get Updates & More</h4>
          <p>Subscribe to the free newsletter and stay up to date.</p>
          <input type="email" className={style.email} placeholder="Your email" />
          <input type="submit" className={style.subscribe} value="Subscribe &rarr;" />
        </div>
        <hr />
        <p className={style.foterPara}>&copy;Aamin Patel & Shubham Parihar 2024: Designed and Developed by me.</p>
      </footer>
    );
}
export default footer