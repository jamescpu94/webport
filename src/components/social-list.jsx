import { Link } from "react-router-dom";

export default function SocialList() {
  return (
    <>
      <ul>
        <li>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/jamescpu/"
            className="d-inline-flex align-items-center"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>&nbsp;Linkedin
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className="d-inline-flex align-items-center"
            to="https://github.com/jamescpu94"
          >
            <i class="fa-brands fa-square-github fa-2x"></i>&nbsp;Github
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            to="https://www.instagram.com/jim_was_here/"
            className="d-inline-flex align-items-center"
          >
            <i class="fa-brands fa-square-instagram fa-2x"></i>
            &nbsp;Instagram
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            to="mailto:udani.jamescharlie@gmail.com"
            className="d-inline-flex align-items-center"
          >
            <i class="fa-solid fa-envelope fa-2x"></i>&nbsp;Email
          </Link>
        </li>
      </ul>
    </>
  );
}
