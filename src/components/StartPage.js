// import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import "./StartPage.scss";
export const StartPage = () => {
  return (
    <>
      <div className="start_wrap">
        <div className="start_container">
          <h1>Question in love</h1>
          <Link className="start_link" to="/question">
            <button>
              <h2>START</h2>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
