import axios from "axios";
import {useState} from "react";
import {useRouter} from "next/navigation";

type Login = {
  username: string;
  password: string;
};

export default function useAuth() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const login = async ({username, password}: Login) => {
    const response = await axios.post(
      "https://api-burgerli.iwebtecnology.com/token",
      {username, password},
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    if (response.status === 200) {
      console.log(response);
      setToken(response.data.access_token);
      router.push("/");
    }
    if (response.status === 401) {
      console.log(response);

      setError("Invalid username or password");
    }
  };

  return {login, token, error};
}
