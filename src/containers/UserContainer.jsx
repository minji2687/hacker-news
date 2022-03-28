import User from "../components/User";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import React from "react";

export default function UserContainer() {
  const [userData, setUserData] = useState({});
  const params = useParams();
  useEffect(() => {
    const response = axios.get(
      `https://hacker-news.firebaseio.com/v0/user/${params.userId}.json`
    );
    response.then((res) => setUserData(res.data));
  }, [params]);

  return <User userData={userData} />;
}
