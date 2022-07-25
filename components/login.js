import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './login.css'

export function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <Text style={styles.whitetext}>
        <input {...register("firstName")} placeholder="First Name" />
      </Text>
      <input {...register("firstName")} placeholder="Last Name" />
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
}
