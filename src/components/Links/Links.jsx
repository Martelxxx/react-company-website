import './links.css'
import Link from '../Link/Link'

function links({partners}) {
  console.log(partners);
  return (
    <>
      <h1>Partners</h1>
      {partners.map((link, i) => (
        <Link key={i} link = {link}/>
      ))}
    </>
  )
}

export default links