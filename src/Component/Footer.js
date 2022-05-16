import twitter_icon from '../images/Twitter Icon.png'
import facebook_icon from '../images/Facebook Icon.png'
import github_icon from '../images/GitHub Icon.png'
import instagram_icon from '../images/Instagram Icon.png'
function Footer() {
return(
    <footer className="footer-main">
        <ul className='list-container'>
            <a href='https://www.twitter.com/deveshshukla224' target="_blank"><li><img src={twitter_icon}/></li></a>
            <a href='https://www.facebook.com' target='_blank'><li><img src={facebook_icon}/></li></a>
            <a href='https://www.instagram.com/star_lord_224' target='_blank'><li><img src={instagram_icon}/> </li></a>
            <a href='https://www.github.com/deveshshukla224' target='_blank'><li><img src={github_icon}/></li></a>
        </ul>
    </footer>
)
}
export default Footer;