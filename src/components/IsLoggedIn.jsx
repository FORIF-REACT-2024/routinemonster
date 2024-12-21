import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const sessionResponse = await axios.get(
          "http://localhost:3000/api/users/session",
          {
              withCredentials: true, // 세션 쿠키 포함
          }
        );
        setIsLoggedIn(sessionResponse.data.success);
        console.log("sessionResponse.data.success", sessionResponse.data.success);
      } catch (error) {
        console.error("Error fetching session:", error);
        setIsLoggedIn(false);
      }
    };

    fetchSession();
  }, []);

  return isLoggedIn;
}

export default IsLoggedIn;
