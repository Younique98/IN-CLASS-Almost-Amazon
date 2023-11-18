import { signIn } from "../../utils/auth";

// GOOGLE LOGIN BUTTON
export const loginButton = () => {
  const domString =
    '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector("#app").innerHTML = domString;
  document.querySelector("#google-auth").addEventListener("click", signIn);
};
