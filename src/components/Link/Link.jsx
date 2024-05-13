import './Link.css'

function Link({link}) {
  console.log(link);
  return (
    <li>
        <h2>{link.title}</h2>
        <a href={link.url}>{link.title}</a>
        <p>{link.description}</p>
    </li>
  )
}

export default Link