import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const newRipple = { x, y, id: Date.now() };

      setRipples((prevRipples) => [...prevRipples, newRipple]);

      setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, 400);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      pointerEvents="none"
      zIndex={9999}
    >
      {ripples.map((ripple) => (
       
        <Box
         key={ripple.id}
          position="absolute"
          border="1px blue dotted"
          borderRadius="50%"
          pointerEvents="none"
          transform="translate(-50%, -50%)"
          style={{
            width: "40px",
            height: "40px",
            top: ripple.y,
            left: ripple.x,
          }}
          animation="rippleEffect 2s ease-in-out"
        />
        ))}
    </Box>
  );
};

