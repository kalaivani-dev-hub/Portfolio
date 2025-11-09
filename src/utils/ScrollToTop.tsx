import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScrollToTop() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      navigate("/");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default ScrollToTop;
