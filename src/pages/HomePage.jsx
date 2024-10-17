import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h1>Welcome to the Contacts App!</h1>
      {!isLoggedIn && <p>Please login/register to use Contacts app.</p>}
    </div>
  );
};

export default HomePage;
