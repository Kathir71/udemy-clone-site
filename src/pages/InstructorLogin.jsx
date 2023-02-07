import { TextField } from "@mui/material";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import { styled } from "@mui/material";
import{Link} from "react-router-dom"
import Footer from "../components/Footer";
import { CircularSpinner } from "../components/Loaders";
import { instructorLoginApi } from "../api/InstructorApi";
const InstructorLogin = () => {
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--textSecondary)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--textSecondary)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--textPrimary)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--textPrimary)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--textSecondary)',
    },
  },
});
  const [email , setEmail] = useState(null);
  const [passwd , setPasswd] = useState(null);
  const [errorState , setErrorState] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
const handleLogin = async(e) => {
  setIsLoading(true);
  e.preventDefault();
  const obj = {
    insEmail:email,
    insPassword:passwd
  }
  const formData = new FormData();
  formData.append('instructor' , JSON.stringify(obj));
  const response = await instructorLoginApi(formData);
  setIsLoading(false);
  console.log(response);
  if(response.status == 200) {
    localStorage.setItem("accessToken" , response.data.accessToken);
    window.location.href = "/";
  }
  }
;
    const pageData = (
    <>
    <div className={styles.container}
    >
      <div className={styles.heading}>Instructor Login</div>
      <p className={styles.text}>Login to your ulearn account</p>
      <div className={styles.inputField}>
      <CssTextField
        variant="outlined"
        type="email"
        label="Email"
        value={email}
        onChange={(newValue) => setEmail(newValue.target.value)}
        sx={{width:'70%'}}
        autoComplete="off"
        required
      />
      </div>
      <div className={styles.inputField}>
      <CssTextField 
      variant="outlined" 
      type="password" 
      label="Password" 
      value={passwd}
        sx={{width:'70%'}}
        onChange={(newValue) => setPasswd(newValue.target.value)}
        autoComplete="off"
       required 
    />
    </div>
    <button className={styles.loginBtn} onClick = {e => handleLogin(e)}>Login</button>
        <p className={styles.text}>Don't have an account?Create one Here <Link to="/user/signup">SignUp</Link></p>
    {errorState==false? null:<p className={styles.error}>Email or password details is wrong</p>}
      </div>
      <Footer/>
      </>
    )
  return (
    <>
    {isLoading ? <CircularSpinner/> : pageData}
    </>
  )
};
export default InstructorLogin;