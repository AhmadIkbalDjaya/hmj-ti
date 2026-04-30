import { useScrollTrigger } from '@mui/material';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { useEffect } from 'react';

export default function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    threshold: props.threshold,
  });

  useEffect(() => {
    function check() {
      if (trigger) {
        props.setToggle(false);
      }
    }
    check();
  }, [props, trigger]);

  return (
    <Slide appear={false} direction="down" in={!trigger} easing="ease-in">
      {children}
    </Slide>
  );
}
